package com.example.StudentManagementBackend.config;

import com.example.StudentManagementBackend.model.Student;
import com.example.StudentManagementBackend.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {
    @Bean
    CommandLineRunner loadData(StudentRepository repository) {
        return args -> {
            repository.save(new Student( "Alice Smith", "alice@example.com"));
            repository.save(new Student( "Bob Johnson", "bob@example.com"));
            repository.save(new Student( "Charlie Lee", "charlie@example.com"));
        };
    }
}