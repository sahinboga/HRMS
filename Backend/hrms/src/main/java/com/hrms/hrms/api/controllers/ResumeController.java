package com.hrms.hrms.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hrms.hrms.business.abstracts.ImageService;
import com.hrms.hrms.business.abstracts.ResumeService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.Image;
import com.hrms.hrms.entities.concretes.Resume;

@RequestMapping("/api/resumes")
@RestController
public class ResumeController extends BaseController{
	
	private ResumeService resumeService;
	private ImageService imageService;

	public ResumeController(ResumeService resumeService, ImageService imageService) {
		super();
		this.resumeService = resumeService;
		this.imageService=imageService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.resumeService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody Resume resume){
		
		return Ok(()->this.resumeService.add(resume));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> update(@RequestBody Resume resume){
		
		return Ok(()->this.resumeService.update(resume));
	}
	
	@GetMapping("/getresume")
	public ResponseEntity<?> getResume(int jsId){
		
		return Ok(()->this.resumeService.getResumeByJobSeeker_id(jsId));
	}
	
	@PostMapping("/uploadphoto")
	public ResponseEntity<?> updatePhoto(int id, @RequestBody MultipartFile photoFile){
		DataResult<Image> result=this.imageService.UploadImage(photoFile,"users");
		if(result.isSuccess()) {
			Image image = (Image)result.getData();
			if(image == null) {
				return ResponseEntity.badRequest().body("Fotoğraf yüklenirken hata oluştu");
			}
			return Ok(()->this.resumeService.updateResumePhoto(id, image));
		}
		return ResponseEntity.badRequest().body(result);
		
	}
	
	@DeleteMapping("/deletephoto")
	public ResponseEntity<?> deleteResumePhoto(int id){
		return Ok(()->this.resumeService.deleteResumePhoto(id));
	}
}
