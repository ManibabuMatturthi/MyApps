package com.foodbox.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "orders")

public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oid;
	private Date orderDate;
	private BigDecimal orderValue;
	private boolean orderconfirmed = false;
	private String paymentId;		
	
	@Column
    @ElementCollection(targetClass=Integer.class)
	private List<Integer> product = new ArrayList<Integer>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private User user;

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public BigDecimal getOrderValue() {
		return orderValue;
	}

	public void setOrderValue(BigDecimal orderValue) {
		this.orderValue = orderValue;
	}

	public boolean isOrderconfirmed() {
		return orderconfirmed;
	}

	public void setOrderconfirmed(boolean orderconfirmed) {
		this.orderconfirmed = orderconfirmed;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public List<Integer> getProduct() {
		return product;
	}

	public void setProduct(Integer product) {
		this.product.add(product);
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getOid() {
		return oid;
	}

	
	
}
