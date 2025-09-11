package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Sales;

public record SalesResponse(
        Integer id,
        Integer movieId,
        String siteName,
        String siteUrl,
        Integer price,
        String quality,
        Integer regionCode,
        Boolean isLimitedEdition
) {
    public static SalesResponse from(Sales s) {
        if (s == null) return new SalesResponse(null, null, null, null, null, null, null, null);
        Integer movieId = (s.getMovie() != null) ? s.getMovie().getId() : null;
        return new SalesResponse(
                s.getId(),
                movieId,
                s.getSiteName(),
                s.getSiteUrl(),
                s.getPrice(),
                s.getQuality(),
                s.getRegionCode(),
                s.getIsLimitedEdition()
        );
    }
}


