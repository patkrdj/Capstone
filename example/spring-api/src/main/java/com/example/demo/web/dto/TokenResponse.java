package com.example.demo.web.dto;

public class TokenResponse {
    private String accessToken;
    private String error;

    public TokenResponse() {}
    public TokenResponse(String accessToken, String error) {
        this.accessToken = accessToken;
        this.error = error;
    }

    public String getAccessToken() { return accessToken; }
    public void setAccessToken(String accessToken) { this.accessToken = accessToken; }
    public String getError() { return error; }
    public void setError(String error) { this.error = error; }
}

