package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.Image;

public interface ImageDao extends JpaRepository<Image, Integer>{

}
