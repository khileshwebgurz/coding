package com.jobportal.jobportal.controller;

// we are import User model
import com.jobportal.jobportal.model.User;
// import user repository
import com.jobportal.jobportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@Controller
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // when get request is made on /register, call this function
    @GetMapping("/register")
    public String registerForm(Model model) {
        model.addAttribute("user", new User()); // create new user and added to model and return it to register template
        return "register";
    }

    // when post request is made in this url
    @PostMapping("/register")
    public String registerSubmit(@ModelAttribute User user) {
        // hashing user password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // setting user role
        user.setRoles(Set.of("USER"));
        // save user to db
        userRepository.save(user);
        return "redirect:/login";
    }

    // get request on login url will show login template
    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "dashboard";
    }
}