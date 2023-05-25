package com.foodbox.controller;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.entity.Category;
import com.foodbox.entity.Orders;
import com.foodbox.entity.Product;
import com.foodbox.entity.User;
import com.foodbox.entity.UserCredentials;
import com.foodbox.services.CartService;
import com.foodbox.services.CategoryServices;
import com.foodbox.services.OrdersService;
import com.foodbox.services.ProductServices;
import com.foodbox.services.UserServices;

//@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api")
public class MainController {

	@Autowired
	private UserServices uservice;

	@Autowired
	private ProductServices pservice;

	@Autowired
	private OrdersService oservice;

	@Autowired
	private CategoryServices catservice;

	@Autowired
	private CartService cartservice;

//	 Admin Api's

	@GetMapping("/admin/allusers")
	public List<User> getAllUsers() {
		return uservice.getAllUsers();
	}

	@DeleteMapping("/admin/users/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable int id) {
		if (uservice.deleteUser(id))
			return new ResponseEntity<Object>("UserDeleted", HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Error Occured", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping("/admin/users/{id}")
	public ResponseEntity<Object> getUserById(@PathVariable int id) {

		User user = uservice.getUserByUid(id);

		if (user != null)
			return new ResponseEntity<Object>(user, HttpStatus.FOUND);
		else
			return new ResponseEntity<Object>("Result not fount", HttpStatus.NOT_FOUND);
	}

	@PostMapping("/admin/products/{cid}")
	public ResponseEntity<Object> addProduct(@RequestBody Product product, @PathVariable int cid) {

		Product prod = pservice.addProduct(product, cid);

		if (prod != null)
			return new ResponseEntity<Object>(prod, HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("Internal Server Error Occured While Accessing Storage",
					HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@PutMapping("/admin/products/{id}")

	public ResponseEntity<Object> modifyProduct(@RequestBody Product product, @PathVariable int id) {

		Product prod = pservice.updateProduct(product, id);
		if (prod != null)
			return new ResponseEntity<Object>(prod, HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("InternalServerErrorOccured", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@DeleteMapping("/admin/products/{id}")
	public boolean removeProduct(@PathVariable int id) {
		return pservice.deleteProduct(id);
		
	}

	

	@PostMapping("/admin/{catg}")
	public ResponseEntity<Object> addingCategory(@PathVariable String catg) {
		Category cat = catservice.addCategory(catg);
		if (cat != null)
			return new ResponseEntity<Object>("Category Entered", HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Error Occured", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@DeleteMapping("/admin/category/{id}")
	public ResponseEntity<Object> deleteCategory(@PathVariable int id) {
		if (catservice.removeCategoryById(id))

			return new ResponseEntity<Object>("Category Deleted", HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Error Occured", HttpStatus.INTERNAL_SERVER_ERROR);

	}

// User Api's

	@PostMapping("/user")
	public ResponseEntity<Object> addUsers(@RequestBody User user) {
		User entity = uservice.addUser(user);
		if (entity != null)
			return new ResponseEntity<Object>("cheers! User Created", HttpStatus.CREATED);
		else
			return new ResponseEntity<Object>("Error while inserting data", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@PutMapping("/user/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User user, @PathVariable int id) {
		User usr = uservice.updateUSer(user, id);
		if (usr != null)
			return new ResponseEntity<Object>(usr, HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("User Not found", HttpStatus.NOT_MODIFIED);

	}

	@PutMapping("/users/{id}")
	public ResponseEntity<Object> changeUserPassword(@PathVariable int id, @RequestParam String newpassword) {

		boolean ischanged = uservice.changeUserPassword(id, newpassword);

		if (ischanged)
			return new ResponseEntity<Object>("Password Changed", HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("Error Occured", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/user/orders/{uid}")	
	public List<Orders> getAllOrdersOfUser(@PathVariable int uid) {

		return oservice.listOfOrdersOfAUserByUserId(uid);

	}

	@GetMapping("/user/cart/{uid}")
	public List<Product> getCurrentCartOrders(@PathVariable int uid) {

		User user = uservice.getUserByUid(uid);

		List<Integer> prods = user.getCart().getProducts();
		List<Product> products = new ArrayList<Product>();
		products.addAll(pservice.getAllProductsofAUserCart(uid));
	
		return products;

	}

	@PostMapping("/login")

	public ResponseEntity<Object> userLogin(@RequestBody UserCredentials credentials) {

//		User user = new User();
		if (credentials != null)
					
			return new ResponseEntity<Object>( uservice.userLogin(credentials.getEmail(), credentials.getPassword()),
					HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("User Credentials Wrong", HttpStatus.UNAUTHORIZED);

	}

	@PostMapping("/user/product/{pid}/{uid}")
	public ResponseEntity<Object> addProductCart(@PathVariable int pid, @PathVariable int uid) {

		if (uid > 0 && pid > 0) 
			return new ResponseEntity<Object>(pservice.addProductToCart(pid, uid), HttpStatus.OK);
		else
			return new ResponseEntity<Object>("error Occured", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@PutMapping("/user/products/{uid}/{pid}")
	public ResponseEntity<Object> removeProductFromCart(@PathVariable int uid, @PathVariable int pid) {
		if (uid > 0 && pid > 0) {
			pservice.removeProductfromCartByPid(pid, uid);
			return new ResponseEntity<Object>("product Removed", HttpStatus.OK);

		} else {
			return new ResponseEntity<Object>("no Product Found", HttpStatus.BAD_REQUEST);
		}

	}

	@PutMapping("/user/checkout/{uid}")
	public ResponseEntity<Object> checkOut(@PathVariable int uid){
		
		
		User user = uservice.getUserByUid(uid);
										
		if(cartservice.checkout(uid))						
			return new ResponseEntity<Object>("order Confirmed", HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Internal Error Occured", HttpStatus.INTERNAL_SERVER_ERROR);
		
	}


	// Products Api's
	@GetMapping("/productsbystat")
	public List<Product> getProductsbystat() {

		return pservice.getAllProductsbyactive();

	}

	@GetMapping("/products/{csid}")
	public List<Product> getProductsbyCuisineId(@PathVariable int csid) {

		return pservice.getAllProductsByCategoryId(csid);
	}

	@GetMapping("/products/{pricelow}/{pricehigh}")
	public List<Product> getProductsByPrice(@PathVariable BigDecimal pricelow, @PathVariable BigDecimal pricehigh) {

		List<Product> prods = pservice.getAllProducts();

		for (Product p : prods) {
			if (p.getPrice().compareTo(pricehigh) == -1 && p.getPrice().compareTo(pricelow) == 1)
				return prods;
			else
				return null;
		}
		return null;
	}
	
	@GetMapping("/products")
	public List<Product> getProducts() {

		return pservice.getAllProducts();

	}
	
	@GetMapping("/product/{pid}")
	public Product getProductsByPid(@PathVariable int pid) {

		return pservice.getProductById(pid);

	}
	

	// Category Api's

	@GetMapping("/cuisine")
	public List<Category> findAllCuisines() {

		return catservice.getallCategories();

	}

	@GetMapping("/cuisine/{id}")
	public ResponseEntity<Object> findCuisineById(@PathVariable int id) {

		Category cuisine = catservice.getCategoryById(id);

		if (cuisine != null)
			return new ResponseEntity<Object>(cuisine, HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<Object>("Error While Accessing the data", HttpStatus.INTERNAL_SERVER_ERROR);

	}

	// OrderServices,

	@GetMapping("/orders")
	public List<Orders> getAllOrders() {
		return oservice.getAllOrders();
		
	}
	
	@GetMapping("/order/{id}")
	public Orders getOrder(@PathVariable int id) {
		return oservice.getOrderById(id);
		
	}
	

	@PutMapping("/admin/setactive/")
	public ResponseEntity<Object> changeProductStatus(@RequestParam int pid) {

		if (pservice.getProductById(pid) != null) {
			Product pr = pservice.getProductById(pid);
			boolean stat = pservice.toggleStatus(pid);
			
			return new ResponseEntity<Object>(stat , HttpStatus.ACCEPTED);
		}

		else {
			return new ResponseEntity<Object>("Error Occured", HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
