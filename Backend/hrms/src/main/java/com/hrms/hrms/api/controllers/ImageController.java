package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hrms.hrms.business.abstracts.ImageService;

@RestController
@RequestMapping("/api/images")
public class ImageController extends BaseController{
	
	ImageService imageService;
	
	@Autowired
	public ImageController(ImageService imageService) {
		super();
		this.imageService = imageService;
	}
	
	@PostMapping("uploadimage")
	public ResponseEntity<?> UploadFile(MultipartFile file,String folderName){
		return Ok(()->this.imageService.UploadImage(file,folderName));
	}
}
