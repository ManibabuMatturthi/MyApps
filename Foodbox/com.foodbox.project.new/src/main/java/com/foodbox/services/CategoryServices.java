package com.foodbox.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.entity.Category;
import com.foodbox.repository.CategoryRepository;

@Service
public class CategoryServices {

	@Autowired
	private CategoryRepository catrepo;
	
	
	public Category addCategory(String cat) {
		Category category = new Category();
		category.setCatname(cat);
		return catrepo.save(category);
	}
	
	public List<Category> getallCategories(){
		return catrepo.findAll();
	}
	
	public Category getCategoryById(int catid) {
		return catrepo.findById(catid).get();
	}
	
	public boolean removeCategoryById(int catid) {
		if(catrepo.findById(catid).isPresent()) {
			catrepo.deleteById(catid);
			
			return true;
		}else {
		
		return false;
	}}
}
