package com.rivalist.typeclash_backend.controller;

import com.rivalist.typeclash_backend.model.User;
import com.rivalist.typeclash_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")

@AllArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/user")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        if(authentication == null || !authentication.isAuthenticated()) {
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not authenticated");
        }
        return  ResponseEntity.status(HttpStatus.OK).body(authentication.getName());
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
}
