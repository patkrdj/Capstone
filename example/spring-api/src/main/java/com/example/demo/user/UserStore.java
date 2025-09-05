package com.example.demo.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class UserStore {
    private final Path storeFile;
    private final PasswordEncoder encoder = new BCryptPasswordEncoder();
    private final Map<String, String> inMemory = new ConcurrentHashMap<>();

    public UserStore() {
        this.storeFile = Paths.get(Optional.ofNullable(System.getenv("USER_STORE_FILE")).orElse("/data/users.txt"));
        try {
            Files.createDirectories(storeFile.getParent());
            if (!Files.exists(storeFile)) {
                Files.createFile(storeFile);
            }
            load();
        } catch (IOException e) {
            throw new RuntimeException("Failed to init user store", e);
        }
    }

    private synchronized void load() throws IOException {
        inMemory.clear();
        List<String> lines = Files.readAllLines(storeFile, StandardCharsets.UTF_8);
        for (String line : lines) {
            if (line.trim().isEmpty() || line.startsWith("#")) continue;
            String[] parts = line.split(":", 2);
            if (parts.length == 2) {
                inMemory.put(parts[0], parts[1]);
            }
        }
    }

    private synchronized void persist() throws IOException {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, String> e : inMemory.entrySet()) {
            sb.append(e.getKey()).append(":").append(e.getValue()).append("\n");
        }
        Files.writeString(storeFile, sb.toString(), StandardCharsets.UTF_8, StandardOpenOption.TRUNCATE_EXISTING);
    }

    public boolean exists(String username) {
        return inMemory.containsKey(username);
    }

    public synchronized boolean create(String username, String rawPassword) {
        if (inMemory.containsKey(username)) return false;
        String hash = encoder.encode(rawPassword);
        inMemory.put(username, hash);
        try { persist(); } catch (IOException e) { throw new RuntimeException(e); }
        return true;
    }

    public boolean verify(String username, String rawPassword) {
        String hash = inMemory.get(username);
        return hash != null && encoder.matches(rawPassword, hash);
    }
}

