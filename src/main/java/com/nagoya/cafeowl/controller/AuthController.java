package com.nagoya.cafeowl.controller;

import com.nagoya.cafeowl.dto.ResponseDto;
import com.nagoya.cafeowl.dto.SignUpDto;
import com.nagoya.cafeowl.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired AuthService authService;
    @PostMapping("/signup")
    public ResponseDto<?> signUp(@RequestBody SignUpDto requestBody){
        ResponseDto<?> result = authService.signUp(requestBody);
        System.out.println(requestBody.toString());
        return result;
    }
}
