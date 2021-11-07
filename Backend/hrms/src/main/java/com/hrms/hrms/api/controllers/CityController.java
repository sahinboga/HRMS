package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.CityService;
import com.hrms.hrms.entities.concretes.City;


@RequestMapping("/api/cities")
@RestController

public class CityController extends BaseController{
	
	private CityService cityService;

	public CityController(CityService cityService) {
		super();
		this.cityService = cityService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.cityService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody City city) {
		return Ok(()->this.cityService.add(city));
	}
}
