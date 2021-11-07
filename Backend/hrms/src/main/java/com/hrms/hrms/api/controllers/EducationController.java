package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.EducationService;
import com.hrms.hrms.entities.concretes.Education;

@RequestMapping("/api/educations")
@RestController
public class EducationController extends BaseController{
	
	private EducationService educationService;
	public EducationController(EducationService educationService) {
		super();
		this.educationService = educationService;
	}
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.educationService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Education education){
		
		return Ok(()->this.educationService.add(education));
	}
	
	
	
}
