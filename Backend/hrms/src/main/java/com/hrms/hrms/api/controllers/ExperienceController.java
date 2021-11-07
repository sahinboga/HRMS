package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.ExperienceService;
import com.hrms.hrms.entities.concretes.Experience;

@RequestMapping("/api/experiences")
@RestController
public class ExperienceController extends BaseController{
	
	private ExperienceService experienceService;
	
	@Autowired
	public ExperienceController(ExperienceService experienceService) {
		super();
		this.experienceService = experienceService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.experienceService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Experience experience) {
		return Ok(()->this.experienceService.add(experience));
	}
}
