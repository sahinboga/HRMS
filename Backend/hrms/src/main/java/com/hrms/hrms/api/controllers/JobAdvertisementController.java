package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.JobAdvertisementService;
import com.hrms.hrms.core.utilities.security.JobAdvertFilter;
import com.hrms.hrms.entities.concretes.JobAdvertisement;


@RestController
@RequestMapping("/api/jobadvertisements")
public class JobAdvertisementController extends BaseController{
	
	private JobAdvertisementService jobAdvertisementService;
	
	@Autowired
	public JobAdvertisementController(JobAdvertisementService jobAdvertisementService) {
		super();
		this.jobAdvertisementService = jobAdvertisementService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		return Ok(()-> this.jobAdvertisementService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody JobAdvertisement jobAdvertisement){
		return Ok(()->this.jobAdvertisementService.add(jobAdvertisement));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody JobAdvertisement jobAdvertisement){
		return Ok(()->this.jobAdvertisementService.update(jobAdvertisement));
	}
	
	@GetMapping("/getactivejobadvertisement")
	public ResponseEntity<?> getByIsActive(){
		return Ok(()-> this.jobAdvertisementService.getByIsActive(true));
	}
	
	@GetMapping("/getactivecompanyjobadvertisement")
	public ResponseEntity<?> getByIsActiveAndEmployer_EmployerId(boolean isActive,int employerId){
		return Ok(()-> this.jobAdvertisementService.getByIsActiveAndEmployer_Id(isActive, employerId));
	}
	
	@PostMapping("/passivejobadvertisement")
	public ResponseEntity<?> passiveJobAdvertisement(int jobAdvertisementId, boolean active){
		return Ok(()-> this.jobAdvertisementService.passiveJobAdvertisement(jobAdvertisementId,active));
	}
	
	@GetMapping("/getjobadvertisement")
	public ResponseEntity<?> getJobAdvertismentById(int jobAdvertisementId){
		return Ok(()-> this.jobAdvertisementService.getJobAdvertisementById(jobAdvertisementId));
	}
	
	@PostMapping("/getfilteringandpage")
	public ResponseEntity<?> getFilterAndPage(int pageNo,int pageSize,@RequestBody JobAdvertFilter jobAdvertFilter){
		return Ok(()-> this.jobAdvertisementService.getAllFilterAndPage(pageNo, pageSize, jobAdvertFilter));
	}
}
