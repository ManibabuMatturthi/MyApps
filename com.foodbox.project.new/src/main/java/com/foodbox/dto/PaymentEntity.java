package com.foodbox.dto;

import java.math.BigDecimal;

public class PaymentEntity{
	
	private String paymentid= null;

	private BigDecimal paidamt;
	
	private boolean orderConfirmed;

	public String getPaymentid() {
		return paymentid;
	}

	public void setPaymentid(String paymentid) {
		this.paymentid = paymentid;
	}

	public BigDecimal getPaidamt() {
		return paidamt;
	}

	public void setPaidamt(BigDecimal paidamt) {
		this.paidamt = paidamt;
	}

	public boolean isOrderConfirmed() {
		return orderConfirmed;
	}

	public void setOrderConfirmed(boolean orderConfirmed) {
		this.orderConfirmed = orderConfirmed;
	}


	

}
