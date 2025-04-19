package com.rivalist.typeclash_backend.controller;

import com.rivalist.typeclash_backend.model.User;
import com.rivalist.typeclash_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // POST /users/register
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // GET /users/{username}
    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUser(username);
    }

    // GET /users/userDetails → returns the currently authenticated user
    @GetMapping("/userDetails")
    public User getCurrentUser(Authentication auth) {
        // auth.getName() is the username from the session
        return userService.getUser(auth.getName());
    }
}
