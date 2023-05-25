package com.foodbox.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.entity.Cart;
import com.foodbox.entity.Category;
import com.foodbox.entity.Product;
import com.foodbox.entity.User;
import com.foodbox.repository.CartRepo;
import com.foodbox.repository.CategoryRepository;
import com.foodbox.repository.OrderRepo;
import com.foodbox.repository.ProductRepo;
import com.foodbox.repository.UserRepo;

@Service

public class ProductServices {
	@Autowired
	private ProductRepo prepo;

	@Autowired
	private CategoryRepository crepo;

	@Autowired
	private UserRepo urepo;

	@Autowired
	private OrderRepo orepo;
	
	@Autowired
	private CartRepo cartrepo;

	public List<Product> getAllProductsbyactive() {
		List<Product> prods = prepo.findAll();
		List<Product> products = new ArrayList<Product>();
		for (Product product : prods) {
			if(product.isEnabled())
				products.add(product);
		}
		
		return products;
	}
	
	public List<Product> getAllProducts() {
		List<Product> prods = prepo.findAll();
		List<Product> products = new ArrayList<Product>();
		for (Product product : prods) {
			products.add(product);
		}
		
		return products;
	}

	public Product getProductsByUid(int pid) {
		return this.prepo.findById(pid).get();
	}

	public List<Product> getAllProductsByCategoryId(int catid) {
		List<Product> products = prepo.findAll();
		List<Product> productbycate = new ArrayList<Product>();
		for (Product p : products) {
			if (p.getCategory().getCatid() == catid)
				productbycate.add(p);
		}
			return productbycate;
	}

	public Product addProduct(Product prod, int catid) {

		Category cat = crepo.findById(catid).get();
		prod.setCategory(cat);

		return this.prepo.save(prod);
	}
	
	
	public Product getProductById(int pid) {

		Product prod = prepo.findById(pid).get();
		
		return prod;
	}
	
	
	

	public Product updateProduct(Product prod, int pid) {

		Product old = this.prepo.findById(pid).get();

		if (old != null) {
			if (prod.getPname() != null)
				old.setPname(prod.getPname());
			if (prod.getDescr() != null)
				old.setDescr(prod.getDescr());
			if (prod.getPrice().intValue() > 0 && prod.getPrice()!=null)
				old.setPrice(prod.getPrice());
			if (prod.getImgurl()!=null)
				old.setImgurl(prod.getImgurl());

			return this.prepo.saveAndFlush(old);
		} else {
			return null;
		}

	}

	public boolean deleteProduct(int pid) {

		if (this.prepo.findById(pid).isPresent()) {
			this.prepo.findById(pid).get().setCategory(null);
			this.prepo.deleteById(pid);
			return true;
		} else {
			return false;
		}
	}

	public boolean addProductToCart(int pid, int uid) {

		User user = urepo.findById(uid).get();
		Product p = prepo.findById(pid).get();
		
		System.out.println(p.getPname());
		
		if(user.getCart()!=null) {
			user.getCart().setProduct(pid);
			urepo.save(user);
			cartrepo.saveAndFlush(user.getCart());
			return true;
		}
		else {
			Cart cart = new Cart();
			cart.setProduct(pid);
			user.setCart(cart);
			urepo.save(user);
			cartrepo.saveAndFlush(user.getCart());
			return true;
			}
	}

	public void removeProductfromCartByPid(int pid, int uid) {
		
		User user =  urepo.findById(uid).get();
		Cart cart = user.getCart();
		List<Integer> prid = cart.getProducts();
		
		int index = prid.indexOf(pid);
		if(index>0) {
			prid.remove(index);
		}
		else {
			prid.clear();
		}
		user.setCart(cart);		
		urepo.save(user);
		cartrepo.save(user.getCart());
	}
	
	
	public void clearProductsFromCart(int uid) {
		User user = urepo.findById(uid).get();
		user.getCart().getProducts().clear();   
		urepo.save(user);
		cartrepo.saveAndFlush(user.getCart());
	}
	
	
	public boolean toggleStatus(int pid) {
		
		Product p = prepo.findById(pid).get();
		
		if(p.isEnabled()) {
			p.setEnabled(false);
			prepo.save(p);
			return p.isEnabled();
		}
		
		else {
			p.setEnabled(true);
			prepo.save(p);
			return p.isEnabled();
		}
	}
	
	public List<Product> getAllProductsofAUserCart(int uid){
		
		User user = urepo.findById(uid).get();
		
		List<Integer> prs = user.getCart().getProducts();
		
		return prepo.findAllById(prs);
		
	}
	
	
}
