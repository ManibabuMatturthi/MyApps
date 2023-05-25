package com.foodbox.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.dto.PaymentEntity;
import com.foodbox.dto.PaymentService;
import com.foodbox.entity.Cart;
import com.foodbox.entity.Orders;
import com.foodbox.entity.Product;
import com.foodbox.entity.User;
import com.foodbox.repository.CartRepo;
import com.foodbox.repository.OrderRepo;
import com.foodbox.repository.ProductRepo;
import com.foodbox.repository.UserRepo;

@Service
public class CartService {

	@Autowired
	private CartRepo crepo;

	@Autowired
	private ProductRepo prepo;

	@Autowired
	private UserRepo urepo;

	@Autowired
	private static OrderRepo orepo;
	
	private UserServices userviceServices = new UserServices();

	PaymentService ps = new PaymentService();

//	private int order_id;

	public boolean checkout(int uid) {

		User user = urepo.findById(uid).get();
		PaymentEntity pe = new PaymentEntity();

		Cart cart = user.getCart();
		Orders order = new Orders();

		BigDecimal val = new BigDecimal(0);

		List<Integer> prods = cart.getProducts();
		List<Product> products = prepo.findAllById(prods); 
		
		if(products != null) {
			for(Product p: products) {				
				val = val.add(p.getPrice());
			}
			
			pe = ps.pay(val);
			
			if(pe.isOrderConfirmed()) {	
				for (Integer product : prods) {
					order.setProduct(product);
				}
				
				order.setOrderValue(val);
				order.setOrderDate(new Date());
				order.setPaymentId(pe.getPaymentid());
				order.setOrderconfirmed(pe.isOrderConfirmed());
				order.setUser(user);
								
				int index = user.setOrder(order);
				urepo.save(user);
				System.out.println(user.getOrder().get(index).getOid());
				user.resetCart();
				crepo.save(user.getCart());
				return pe.isOrderConfirmed();
				
			}
		}
		return pe.isOrderConfirmed();
	}

}