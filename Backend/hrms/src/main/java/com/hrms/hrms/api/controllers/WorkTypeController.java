package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.WorkTypeService;
import com.hrms.hrms.entities.concretes.City;
import com.hrms.hrms.entities.concretes.WorkType;

@RestController
@RequestMapping("/api/worktypes")
public class WorkTypeController extends BaseController{
	
	private WorkTypeService workTypeService;
	
	@Autowired
	public WorkTypeController(WorkTypeService workTypeService) {
		super();
		this.workTypeService = workTypeService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.workTypeService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody WorkType workType) {
		return Ok(()->this.workTypeService.add(workType));
	}
}
