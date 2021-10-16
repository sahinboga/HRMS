package com.hrms.hrms.api.controllers;

import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.AuthService;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.security.HashingHelper;
import com.hrms.hrms.entities.concretes.JobSeeker;
import com.hrms.hrms.entities.dtos.UserForLoginDto;

@RestController
@RequestMapping("api/auth")
public class AuthController {
	
	private AuthService authService;
	
	@Autowired
	public AuthController(AuthService authService) {
		super();
		this.authService = authService;
	}
	
	@PostMapping("/registerforjobseeker")
	public Result registerForJobSeeker(@RequestBody JobSeeker jobSeeker) {
		return this.authService.registerForJobSeeker(jobSeeker);
		
	}
	@PostMapping("/login")
	public Result login(@RequestBody UserForLoginDto loginDto) {
		return this.authService.login(loginDto);
		
	}
	
}
