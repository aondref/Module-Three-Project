package com.example.server.config;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;


@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            User aondre = new User(
                    "Aondre",
                    "aondre.brown@gmail.com",
                    70000.00
            );

            User angel = new User(
                    "Angel",
                    "angel.juarez@gmail.com",
                    120000.00
            );

            repository.saveAll(
                    List.of(aondre, angel)
            );
        };
    }
}
