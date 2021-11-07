package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.DepartmentService;

@RequestMapping("/api/departments")
@RestController
public class DepartmentController extends BaseController{
	
	private DepartmentService departmentService;
	public DepartmentController(DepartmentService departmentService) {
		super();
		this.departmentService = departmentService;
	}
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.departmentService.getAll());
	}
}
