package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "user_roles")
public class UserRoles {
    @Id
    @Column(name = "user_id")
    private int user_id;

    @Column(name = "role_id")
    private int role_id;
}

