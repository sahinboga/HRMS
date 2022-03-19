package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.RoleService;

@RequestMapping("/api/roles")
@RestController
public class RoleController extends BaseController  {
	
	private RoleService roleService;

	@Autowired
	public RoleController(RoleService roleService) {
		super();
		this.roleService = roleService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.roleService.getAll());
	}
}
