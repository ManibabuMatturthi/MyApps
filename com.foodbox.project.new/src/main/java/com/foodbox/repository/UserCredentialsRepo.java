package com.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.UserCredentials;

@Repository
public interface UserCredentialsRepo extends JpaRepository<UserCredentials, Integer>{

}
