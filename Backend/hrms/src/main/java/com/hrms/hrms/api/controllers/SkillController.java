package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.SkillService;
import com.hrms.hrms.entities.concretes.Skill;

@RequestMapping("/api/skills")
@RestController

public class SkillController extends BaseController{
	
	private SkillService skillService;
	public SkillController(SkillService skillService) {
		super();
		this.skillService = skillService;
	}
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.skillService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Skill skill)
	{
		return Ok(()->this.skillService.add(skill));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody Skill skill)
	{
		return Ok(()->this.skillService.delete(skill));
	}
}
