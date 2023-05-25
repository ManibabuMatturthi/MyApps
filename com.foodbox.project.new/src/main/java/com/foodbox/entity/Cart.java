package com.foodbox.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartid;


	@Column
    @ElementCollection(targetClass=Integer.class)
	private List<Integer> products = new ArrayList<Integer>();

	public Cart() {
	}


	public List<Integer> getProducts() {
		return products;
	}

	public void setProduct(int product) {

		this.products.add(product);
	}

	public void setProducts(List<Integer> product) {

		this.products = product;
	}

	public int getCartid() {
		return cartid;
	}

	public Cart setCartid(int cartid) {
		this.cartid = cartid;

		return this;
	}
	
	public void resetCart() {		
		 this.products.clear();
	}


}
