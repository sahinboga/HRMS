package com.hrms.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.FavoriteJobAdvert;

public interface FavoriteJobAdvertDao extends JpaRepository<FavoriteJobAdvert, Integer>{
	
	List<FavoriteJobAdvert>getByJobSeeker_Id(int jobSeekerId);
}
