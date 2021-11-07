package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.SchoolService;
import com.hrms.hrms.entities.concretes.School;

@RequestMapping("/api/schools")
@RestController
public class SchoolController extends BaseController{
	
	private SchoolService schoolService;

	public SchoolController(SchoolService schoolService) {
		super();
		this.schoolService = schoolService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.schoolService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody School school){
		
		return Ok(()->this.schoolService.add(school));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody School school){
		
		return Ok(()->this.schoolService.delete(school));
	}
}
