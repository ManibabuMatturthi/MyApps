package com.foodbox.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.Cart;
import com.foodbox.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

//	void save(Cart cart);

}
