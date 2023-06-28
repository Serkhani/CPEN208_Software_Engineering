package com.school.database_project.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class Student {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long studentID;
    private String firstName;
    private String middleName;
    private String lastName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "departmentID")
    private String student;

}