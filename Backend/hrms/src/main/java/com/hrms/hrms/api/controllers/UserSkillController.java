package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.UserSkillService;
import com.hrms.hrms.entities.concretes.UserSkill;
import com.hrms.hrms.entities.dtos.UserSkillInputDto;

@RequestMapping("/api/userskills")
@RestController
public class UserSkillController extends BaseController{
	
	private UserSkillService userSkillService;
	
	@Autowired
	public UserSkillController(UserSkillService userSkillService) {
		super();
		this.userSkillService = userSkillService;
	}

	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.userSkillService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody UserSkill userSkill) {
		return Ok(()->this.userSkillService.add(userSkill));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody UserSkillInputDto skill){
		return Ok(()->this.userSkillService.update(skill));
	}
}
