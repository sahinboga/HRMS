package com.hrms.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hrms.hrms.business.abstracts.EmployerService;
import com.hrms.hrms.business.abstracts.ImageService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.Employer;
import com.hrms.hrms.entities.concretes.Image;

@RequestMapping("/api/employers")
@RestController
public class EmployerController extends BaseController {
	
	private EmployerService employerService;
	private ImageService imageService;
	
	@Autowired
	public EmployerController(EmployerService employerService,ImageService imageService) {
		super();
		this.employerService = employerService;
		this.imageService=imageService;
	}
	
	@GetMapping("/getall")
	 public ResponseEntity<?> getAll(){
		
		return Ok(()->this.employerService.getAll());
	}
	
	@GetMapping("/getemployer")
	public ResponseEntity<?> getById(int employerId){
		
		return Ok(()->this.employerService.getEmployerById(employerId));
	}
	
	@PutMapping("/updateemployer")
	public ResponseEntity<?> update(@RequestBody Employer employer){
		return Ok(()->this.employerService.update(employer));
	}
	
	@PostMapping("/uploadlogo")
	public ResponseEntity<?> uploadLogo(int id, @RequestBody MultipartFile photoFile){
		DataResult<Image> result=this.imageService.UploadImage(photoFile,"companylogos");
		if(result.isSuccess()) {
			Image image = (Image)result.getData();
			if(image == null) {
				return ResponseEntity.badRequest().body("Fotoğraf yüklenirken hata oluştu");
			}
			return Ok(()->this.employerService.uploadLogo(id, image));
		}
		return ResponseEntity.badRequest().body(result);
		
	}
	
	@DeleteMapping("/deletelogo")
	public ResponseEntity<?> deleteLogo(int id){
		return Ok(()->this.employerService.deleteLogo(id));
	}
}
