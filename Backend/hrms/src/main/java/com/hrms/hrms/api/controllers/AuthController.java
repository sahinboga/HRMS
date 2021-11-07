package com.hrms.hrms.api.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.AuthService;
import com.hrms.hrms.entities.concretes.Employer;
import com.hrms.hrms.entities.concretes.JobSeeker;
import com.hrms.hrms.entities.dtos.UserForLoginDto;

@RestController
@RequestMapping("api/auth")
public class AuthController extends BaseController{
	
	private AuthService authService;
	
	@Autowired
	public AuthController(AuthService authService) {
		super();
		this.authService = authService;
	}
	
	@PostMapping("/registerforjobseeker")
	public ResponseEntity<?> registerForJobSeeker(@RequestBody JobSeeker jobSeeker) {
		return Ok(()->this.authService.registerForJobSeeker(jobSeeker));
		
	}
	@PostMapping("/registerforemployer")
	public ResponseEntity<?> registerForEmployer(@RequestBody Employer employer) {
		return Ok(()->this.authService.registerForEmployer(employer));
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserForLoginDto loginDto) {
		return Ok(()->this.authService.login(loginDto));
		
	}
	
}
