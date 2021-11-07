package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.JobPositionService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.JobPosition;


@RequestMapping("/api/jobpositions")
@RestController
public class JobPositionController extends BaseController{
	
	private JobPositionService jobPositionService;
	
	@Autowired
	public JobPositionController(JobPositionService jobPositionService) {
		super();
		this.jobPositionService = jobPositionService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.jobPositionService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody JobPosition jobPosition) {
		return Ok(()->this.jobPositionService.add(jobPosition));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody JobPosition jobPosition){
		return Ok(()->this.jobPositionService.delete(jobPosition));
	}
}
