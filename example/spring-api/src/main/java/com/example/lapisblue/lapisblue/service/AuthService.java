package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.Util.PasswordConfig;
import com.example.lapisblue.lapisblue.domain.User;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // BCryptPasswordEncoder

    public void verifyLogin(String usernameOrEmail, String rawPassword) {
        User user = userRepository.findByUsername(usernameOrEmail)
                .or(() -> userRepository.findByEmail(usernameOrEmail))
                .orElseThrow(() -> new IllegalArgumentException("자격 증명이 올바르지 않습니다."));

        if (!passwordEncoder.matches(rawPassword, user.getPasswordHash())) {
            throw new IllegalArgumentException("자격 증명이 올바르지 않습니다.");
        }
    }
}
