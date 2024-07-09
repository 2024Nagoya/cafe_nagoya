package com.nagoya.cafeowl.repository;

import com.nagoya.cafeowl.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    boolean existsById(String id); // 기본키 존재 여부 확인
    boolean existsByEmail(String email); // 이메일 존재 여부 확인
}
