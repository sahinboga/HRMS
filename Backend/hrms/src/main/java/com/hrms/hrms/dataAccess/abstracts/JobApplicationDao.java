package com.hrms.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.JobApplication;

public interface JobApplicationDao extends JpaRepository<JobApplication, Integer> {
	
	boolean existsByJobSeeker_IdAndJobAdvertisement_Id(int jobSeekerId,int jobAdvertId);
	List<JobApplication> getAllByJobAdvertisement_Id(int id);
	List<JobApplication> getAllByJobSeeker_Id(int id);
}
