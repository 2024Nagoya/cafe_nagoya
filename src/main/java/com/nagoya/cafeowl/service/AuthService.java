package com.nagoya.cafeowl.service;

import com.nagoya.cafeowl.dto.ResponseDto;
import com.nagoya.cafeowl.dto.SignUpDto;
import com.nagoya.cafeowl.entity.UserEntity;
import com.nagoya.cafeowl.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;
    public ResponseDto<?> signUp(SignUpDto signUpDto) {
        String email = signUpDto.getEmail();
        String password = signUpDto.getPassword();
        String confirmPassword = signUpDto.getConfirmPassword();

        try{
            if(userRepository.existsById(email)){ //아이디(email) 존재하는 경우
                return ResponseDto.setFailed("중복된 아이디(email)입니다!");
            }
        }catch (Exception e){
            return ResponseDto.setFailed("데이터베이스 연결에 실패하였습니다!");
        }
        //비밀번호 다를 때
        if(!password.equals(confirmPassword)){
            return ResponseDto.setFailed("비밀번호가 일치하지 않습니다!");
        }

        UserEntity userEntity = new UserEntity(signUpDto);

        try {
            userRepository.save(userEntity);
        }catch (Exception e){
            return ResponseDto.setFailed("데이터베이스 연결에 실패하였습니다!");
        }

        return ResponseDto.setSuccess("회원가입에 성공했습니다!");
    }

}
