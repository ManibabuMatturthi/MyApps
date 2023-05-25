package com.foodbox.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.entity.Orders;
import com.foodbox.entity.User;
import com.foodbox.repository.OrderRepo;
import com.foodbox.repository.UserRepo;

@Service
public class OrdersService {
	@Autowired
	private OrderRepo orepo;

	@Autowired
	private UserRepo urepo;

	private CartService cs = new CartService();

	public Orders getOrderByIdx(int idx) {
		return orepo.findAll().get(idx);
	}

	public List<Orders> listOfOrdersOfAUserByUserId(int uid) {

		User user = urepo.findById(uid).get();

		if (user != null) {
			return user.getOrder();
		} else {
			return null;
		}

	}

	public List<Orders> listOfOrdersOfAUserByOrderDate(int uid, int date) {

		User user = urepo.findById(uid).get();

		List<Orders> orders = new ArrayList<Orders>();
		List<Orders> ordrs = user.getOrder();

		Date dt = new Date(date);

		if (user.getOrder() != null) {

			for (Orders ords : ordrs) {
				if (ords.getOrderDate().compareTo(dt) == 0) {
					orders.add(ords);
				}
			}
			return orders;
		}

		else {
			return orders;
		}
	}

	public Orders getOrderById(int orderid) {
		// TODO Auto-generated method stub
		return orepo.findById(orderid).get();
	}

	public Orders getOrderByPaymentid(String paymentid) {
		List<Orders> orders = orepo.findAll();

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
	
	public List<Orders> getAllOrders(){
		List<Orders> orders = orepo.findAll();
		
		return orders;
	}

}
