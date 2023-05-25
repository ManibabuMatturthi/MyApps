package com.foodbox.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.entity.UserCredentials;
import com.foodbox.repository.UserCredentialsRepo;

@Service
public class UserCredentialsService {

	@Autowired
	private UserCredentialsRepo ucrepo;
	
	public UserCredentials addUserCredentials(UserCredentials uc) {
		
		return ucrepo.save(uc);
		
	}
	
}
