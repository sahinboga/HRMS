package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.JobApplicationService;
import com.hrms.hrms.entities.concretes.JobApplication;

@RestController
@RequestMapping("/api/jobapplications")
public class JobApplicationController extends BaseController{

	private JobApplicationService jobApplicationService;
	
	@Autowired
	public JobApplicationController(JobApplicationService jobApplicationService) {
		super();
		this.jobApplicationService = jobApplicationService;
	}
	
	@PostMapping("/apply")
	public ResponseEntity<?> apply(@RequestBody JobApplication jobApplication){
		
		return Ok(()->this.jobApplicationService.apply(jobApplication));
	}
	
	@GetMapping("/getallbyjobadvert")
	public ResponseEntity<?> getAllByJobAdvert(int id){
		return Ok(()->this.jobApplicationService.getAllByJobAdvertId(id));
	}
	
	@GetMapping("/getallbyjobseeker")
	public ResponseEntity<?> getAllByJobSeeker(int id){
		return Ok(()->this.jobApplicationService.getAllByJobSeekerId(id));
	}
}
