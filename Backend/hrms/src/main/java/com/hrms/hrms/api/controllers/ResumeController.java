package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.ResumeService;
import com.hrms.hrms.entities.concretes.Resume;

@RequestMapping("/api/resumes")
@RestController
public class ResumeController extends BaseController{
	
	private ResumeService resumeService;

	public ResumeController(ResumeService resumeService) {
		super();
		this.resumeService = resumeService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.resumeService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Resume resume){
		
		return Ok(()->this.resumeService.add(resume));
	}
	
	@GetMapping("/getresume")
	public ResponseEntity<?> getResume(int resumeId){
		
		return Ok(()->this.resumeService.getResumeByResumeId(resumeId));
	}
	
	
}
