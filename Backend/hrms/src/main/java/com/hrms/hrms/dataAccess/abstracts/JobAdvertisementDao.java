package com.hrms.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hrms.hrms.core.utilities.security.JobAdvertFilter;
import com.hrms.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementDao extends JpaRepository<JobAdvertisement, Integer> {
	
	List<JobAdvertisement> getByIsActive(boolean isActive);
	
	List<JobAdvertisement> getByIsActiveAndEmployer_Id(boolean isActive,int employerId);
	
	JobAdvertisement getJobAdvertisementById(int id);
	
	@Query("Select j from JobAdvertisement j where ((:#{#filter.cityId}) IS NULL OR j.city.cityId IN (:#{#filter.cityId}))"
			+ "and ((:#{#filter.jobPositionId}) IS NULL OR j.jobPosition.id IN (:#{#filter.jobPositionId}))"
			+ "and ((:#{#filter.workTypeId}) IS NULL OR j.workType.id IN (:#{#filter.workTypeId}))"
			+ "and ((:#{#filter.companySectorId}) IS NULL OR j.companySector.id IN (:#{#filter.companySectorId}))")
	public Page<JobAdvertisement> getFilteringAndPage(@Param("filter") JobAdvertFilter filter, Pageable pageable);
}
