package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.CompanySectorService;
import com.hrms.hrms.entities.concretes.City;
import com.hrms.hrms.entities.concretes.CompanySector;


@RestController
@RequestMapping("/api/companysectors")
public class CompanySectorController extends BaseController{
	
	private CompanySectorService companySectorService;
	
	@Autowired
	public CompanySectorController(CompanySectorService companySectorService) {
		super();
		this.companySectorService = companySectorService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.companySectorService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody CompanySector companySector) {
		return Ok(()->this.companySectorService.add(companySector));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody CompanySector companySector) {
		return Ok(()->this.companySectorService.delete(companySector));
	}
}
