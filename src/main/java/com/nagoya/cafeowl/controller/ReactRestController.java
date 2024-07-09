package com.nagoya.cafeowl.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactRestController {

    @GetMapping("/api/test")
    public String test() {
        return "Hello, React!";
    }
}
