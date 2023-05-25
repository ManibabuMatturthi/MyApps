package com.foodbox.dto;

import java.math.BigDecimal;
import java.util.Date;

import com.foodbox.services.OrdersService;

public class PaymentService {
	
	private PaymentEntity paymentEntity = new PaymentEntity();	
	
	public PaymentEntity pay(BigDecimal cartval) {
		
		int orderDate = new Date().getDate();
		String orderVal = cartval.toPlainString();
		
		paymentEntity.setPaymentid(orderVal.strip()+"v"+orderDate+"d"); 
		paymentEntity.setPaidamt(cartval);
		paymentEntity.setOrderConfirmed(true);
		
		return paymentEntity;
		
	}


	
	
	
}
