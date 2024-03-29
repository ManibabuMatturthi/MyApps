package com.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.Orders;

@Repository
public interface OrderRepo extends JpaRepository<Orders, Integer>{

}
