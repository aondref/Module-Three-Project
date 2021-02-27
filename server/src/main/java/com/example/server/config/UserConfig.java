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
                    "Aondre Franklin",
                    "aondre.franklin@gmail.com",
                    70000.00
            );

            User brock = new User(
                    "Brock Green",
                    "brock.green@gmail.com",
                    65000.00
            );

            User carl = new User(
                    "Carl Coffee",
                    "carl.coffee@gmail.com",
                    75000.00
            );

            User daniel = new User(
                    "Daniel Treaty",
                    "daniel.treaty@gmail.com",
                    120000.00
            );

            User edward = new User(
                    "Edward Williams",
                    "edward.williams@gmail.com",
                    160000.00
            );

            repository.saveAll(
                    List.of(aondre, brock, carl, daniel, edward)
            );
        };
    }
}
