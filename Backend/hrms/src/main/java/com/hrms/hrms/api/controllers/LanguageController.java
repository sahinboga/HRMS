package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.LanguageService;
import com.hrms.hrms.entities.concretes.Language;

@RequestMapping("/api/languages")
@RestController
public class LanguageController extends BaseController{
	
	private LanguageService languageService;
	public LanguageController(LanguageService languageService) {
		super();
		this.languageService = languageService;
	}
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.languageService.getAll());
	}
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Language language){
		return Ok(()->this.languageService.add(language));
	}
}
