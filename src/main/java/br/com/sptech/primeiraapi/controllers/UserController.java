package br.com.sptech.primeiraapi.controllers;

import java.util.Objects;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sptech.primeiraapi.entities.User;

@RestController
@RequestMapping("/user")
public class UserController {

    private User admin = new User("admin", "admin");
    
    @PostMapping("/auth")
    public boolean postAuth(@RequestBody User user) {
        if (Objects.nonNull(user)) {
            return admin.auth(user);
        } else {
            return false;
        }
    }
}
