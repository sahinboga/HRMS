package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.UserLanguage;

public interface UserLanguageDao extends JpaRepository<UserLanguage, Integer>{

}
