package com.example.server.controller;

import com.example.server.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserController userController;

    public UserController(UserController userController) {
        super();
        this.userController = userController;
    }

    @GetMapping("/user")
    Collection<User> users() { return }
}
