package com.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer> {

}
