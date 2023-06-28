package com.school.database_project.models;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Department {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long departmentID;
    
    private String departmentName;
}
