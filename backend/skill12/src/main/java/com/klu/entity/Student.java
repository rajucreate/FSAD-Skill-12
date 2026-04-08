package com.klu.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    @Schema(description = "Unique ID of the student", example = "1")
    private Long id;

    @NotBlank
    @Schema(description = "Name of the student", example = "Rex")
    private String name;

    @Email
    @Schema(description = "Email of the student", example = "rex@gmail.com")
    private String email;

    @Schema(description = "Course enrolled", example = "Computer Science")
    private String course;

    // Getters and Setters
}