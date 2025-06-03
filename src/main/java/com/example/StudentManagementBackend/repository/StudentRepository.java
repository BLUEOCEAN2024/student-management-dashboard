package com.example.StudentManagementBackend.repository;

import com.example.StudentManagementBackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    // JPA provides all the basic CRUD methods
}