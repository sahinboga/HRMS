package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.User;

public interface UserDao extends JpaRepository<User, Integer>{
	
	boolean existsByEmail(String email);
	User getByEmail(String email);
	User getUserByUserId(int userId);
}
