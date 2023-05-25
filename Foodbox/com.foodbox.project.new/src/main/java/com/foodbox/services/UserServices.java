package com.foodbox.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.dto.AuthTocken;
import com.foodbox.entity.Address;
import com.foodbox.entity.Cart;
import com.foodbox.entity.Orders;
import com.foodbox.entity.User;
import com.foodbox.entity.UserCredentials;
import com.foodbox.repository.OrderRepo;
import com.foodbox.repository.UserCredentialsRepo;
import com.foodbox.repository.UserRepo;

@Service

public class UserServices {

	@Autowired
	private UserRepo urepo;
	
	@Autowired
	private UserCredentialsRepo ucrepo;
	
	@Autowired
	private OrderRepo orepo;
	
	public List<User> getAllUsers() {
		return this.urepo.findAll();
	}

	public User getUserByUid(int uid) {
		return this.urepo.findById(uid).get();
	}

	public User getUserByEmail(String email) {

		List<User> users = urepo.findAll();

		for (User u : users) {
			if (u.getUsercred().getEmail().compareToIgnoreCase(email) == 0)
				return u;
		}
		return null;

	}

	public User addUser(User usr) {
		
//		List<User> user = new ArrayList<User>();	
		
//		user = urepo.findAll();
//		if(usr!=null) {
//		for(User us:user) {
//			if(us.getUsercred().getEmail().compareTo(usr.getUsercred().getEmail())!=0) {
				return this.urepo.save(usr);
//			}
//			
//		}}
//		else {
//			return null;
//		}
//		return null;
		
		
	}

	public User updateUSer(User usr, int id) {

		User old = this.urepo.findById(id).get();

		if (old != null) {
			
			if (usr.getUsercred() != null)
				old.setUsercred(usr.getUsercred());
			if (usr.getMob() > 0)
				old.setMob(usr.getMob());
			if (usr.getName() != null)
				old.setName(usr.getName());

			return this.urepo.save(old);
		} else {
			return null;
		}

	}

	public boolean deleteUser(int uid) {

		if (this.urepo.findById(uid).isPresent()) {

			this.urepo.deleteById(uid);
			return true;
		} else {
			return false;
		}
	}

	public AuthTocken userLogin(String email, String password) {

		User user = this.getUserByEmail(email);

		if (user == null)
			return null;

		else if (user.getUsercred().getPassword().equals(password)) {
			
			AuthTocken auth = new AuthTocken();
			
			auth.setId(user.getUid());
			auth.setAuth(true);
			auth.setName(user.getName());
			
			return auth;
		}
			

		else
			return null;
	}

	public List<Orders> listAllOrdersOfUserByUserId(int uid) {

		User user = urepo.findById(uid).get();
		if (user != null) {
			return user.getOrder();
		} else {
			return null;
		}

	}

	public Cart displayActiveOrderCartByUserId(int uid) {
		User user = urepo.findById(uid).get();
		if (user != null) {
			return user.getCart();
		}
		
		else {
			return null;
		}
	}
	
	public Boolean changeUserPassword(int uid, String password){
		
		User old = urepo.findById(uid).get();
		if(password!=null) {
			
			UserCredentials ucr = old.getUsercred();
			
			ucr.setPassword(password);
			
			
			old.setUsercred(ucr);
			urepo.save(old);
			ucrepo.save(ucr);
					
			return true;
		}
		
		else {
			return false;
		}
		
		}
		
	
	public Orders getOrderByPaymentid(String paymentid, int uid) {
		
		List<Orders> orders = urepo.findById(uid).get().getOrder();

		Orders order = new Orders();
		for (Orders ordr : orders) {
			if (ordr.getPaymentId().equals(paymentid)) {
				order = ordr;
				break;
			} else {
				continue;
			}
		}
		
		if(order!=null) 
			return order;
		else
			return null;
	}
	

}
