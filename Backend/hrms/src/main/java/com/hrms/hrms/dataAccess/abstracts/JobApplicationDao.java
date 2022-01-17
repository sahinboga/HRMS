package com.hrms.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.JobApplication;

public interface JobApplicationDao extends JpaRepository<JobApplication, Integer> {
	
	JobApplication getByJobSeeker_Id(int id);
	JobApplication getByJobAdvertisement_Id(int id);
	List<JobApplication> getAllByJobAdvertisement_Id(int id);
	List<JobApplication> getAllByJobSeeker_Id(int id);
}
