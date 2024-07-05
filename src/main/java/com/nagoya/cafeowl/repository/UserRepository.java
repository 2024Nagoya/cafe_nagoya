package com.nagoya.cafeowl.repository;

import com.nagoya.cafeowl.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {

}
