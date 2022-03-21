package com.hrms.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.UserService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.User;


@RequestMapping("/api/users")
@RestController
public class UserController extends BaseController{
	
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	@GetMapping("/getall")
	public ResponseEntity<?>  getAll(){
		 return Ok(()->this.userService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?>  add(@RequestBody User user) {
		return Ok(()->this.userService.add(user));
	}
	
	@GetMapping("/getuser")
	public ResponseEntity<?> getById(int userId){
		return Ok(()->this.userService.getUserByUserId(userId));
	}
	
}
