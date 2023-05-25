package com.foodbox.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.foodbox.entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer>{
	
	
//	@Query("select p from Product p join fetch p.category") 
//	List<Product> findall();

}
