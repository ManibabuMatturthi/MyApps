package com.foodbox.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")

public class User{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	private String name;
	private long mob;
	private String city;
	private String contry;
	private long zipcode;
	
	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
//    @JoinColumn(name = "ucid" )
//	@JsonIgnore
	private UserCredentials usercred;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="cart_id")
//	@JsonIgnore
	private Cart cart= new Cart();
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL )
	@JsonIgnore
	private List<Orders> order = new ArrayList<Orders>();

	public User() {}

	public int getUid() {
		return uid;
	}

//	public void setUid(int uid) {
//		this.uid = uid;
//	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getMob() {
		return mob;
	}

	public void setMob(long mob) {
		this.mob = mob;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getContry() {
		return contry;
	}

	public void setContry(String contry) {
		this.contry = contry;
	}

	public long getZipcode() {
		return zipcode;
	}

	public void setZipcode(long zipcode) {
		this.zipcode = zipcode;
	}

	public UserCredentials getUsercred() {
		return usercred;
	}

	public void setUsercred(UserCredentials usercred) {
		this.usercred = usercred;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
	public void resetCart() {
		this.cart.getProducts().clear();
	}

	public List<Orders> getOrder() {
		return this.order;
	}

	public int setOrder(Orders order) {
		
		this.order.add(order);
		
		return this.order.indexOf(order);
	}

	
	
	
	
}
