package com.hrms.hrms.api.controllers;

import java.util.concurrent.Callable;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin
public class BaseController {
	
	public <T> ResponseEntity<?> Ok(Callable<T> call) {
		try {
			T t = call.call();
			return ResponseEntity.ok(t);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			//TODO: Loglama işlemlerini burada hallet.
			return ResponseEntity.badRequest().body(e.getMessage()); //hata oluştuğunda kullanıcının göreceği mesaj
		}
	}
}
