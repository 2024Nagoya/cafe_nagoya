package com.nagoya.cafeowl.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class ReactRestController {
    @GetMapping("/api/test")
    public String test() {
        return "Hello, React!";
    }
}