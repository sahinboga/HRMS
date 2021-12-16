package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.UserLanguageService;
import com.hrms.hrms.entities.concretes.UserLanguage;

@RequestMapping("/api/userlanguages")
@RestController
public class UserLanguageController extends BaseController{
	
	private UserLanguageService userLanguageService;
	
	@Autowired
	public UserLanguageController(UserLanguageService userLanguageService) {
		super();
		this.userLanguageService = userLanguageService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.userLanguageService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody UserLanguage userLanguage) {
		return Ok(()->this.userLanguageService.add(userLanguage));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody UserLanguage userLanguage){
		return Ok(()->this.userLanguageService.update(userLanguage));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody UserLanguage userLanguage){
		return Ok(()->this.userLanguageService.delete(userLanguage));
	}
}
