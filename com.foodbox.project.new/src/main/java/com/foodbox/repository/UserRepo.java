package com.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

}
