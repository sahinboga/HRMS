package com.hrms.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.hrms.business.abstracts.FavoriteJobAdvertService;
import com.hrms.hrms.entities.concretes.FavoriteJobAdvert;

@RestController
@RequestMapping("/api/favoritejobadverts")
public class FavoriteJobAdvertController extends BaseController{
	
	private FavoriteJobAdvertService favoriteJobAdvertService;
	
	@Autowired
	public FavoriteJobAdvertController(FavoriteJobAdvertService favoriteJobAdvertService) {
		super();
		this.favoriteJobAdvertService = favoriteJobAdvertService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAll(){
		
		return Ok(()->this.favoriteJobAdvertService.getAll());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody FavoriteJobAdvert favoriteJobAdvert){
		return Ok(()->this.favoriteJobAdvertService.add(favoriteJobAdvert));
	}
	
	@GetMapping("/getjobseekerfavorite")
	public ResponseEntity<?> getFavoriteJobAdvert(int jobseeker){
		
		return Ok(()->this.favoriteJobAdvertService.getFavoriteJobAdvert(jobseeker));
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> delete(@RequestBody FavoriteJobAdvert favoriteJobAdvert){
		return Ok(()->this.favoriteJobAdvertService.delete(favoriteJobAdvert));
	}
}
