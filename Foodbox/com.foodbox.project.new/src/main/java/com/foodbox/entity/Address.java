package com.foodbox.entity;

public class Address {

	
	
	private String dn;
	private String street;
	private String city;
	private long zipcode;
	
	public Address() {}

	public String getDn() {
		return dn;
	}

	public void setDn(String dn) {
		this.dn = dn;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getZipcode() {
		return zipcode;
	}

	public void setZipcode(long zipcode) {
		this.zipcode = zipcode;
	}

	

	public Address(String dn, String street, String city, long zipcode) {
		super();
		
		this.dn = dn;
		this.street = street;
		this.city = city;
		this.zipcode = zipcode;
		}
	
	
	
	
	
}
