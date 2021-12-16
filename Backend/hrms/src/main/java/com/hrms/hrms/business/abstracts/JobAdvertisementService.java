package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.security.JobAdvertFilter;
import com.hrms.hrms.entities.concretes.JobAdvertisement;

public interface JobAdvertisementService extends CrudService<JobAdvertisement> {
	
	DataResult<List<JobAdvertisement>> getByIsActive(boolean isActive) throws Exception;
	
	DataResult<List<JobAdvertisement>> getByIsActiveAndEmployer_Id(boolean isActive,int employerId) throws Exception;
	
	DataResult<JobAdvertisement> passiveJobAdvertisement(int jobAdvertisementId,boolean active) throws Exception;
	
	void updateIsActive(boolean isActive, int id) throws Exception;
	
	DataResult<JobAdvertisement> getJobAdvertisementById(int id) throws Exception;
	
	DataResult<List<JobAdvertisement>> getAllFilterAndPage(int pageNo,int pageSize,JobAdvertFilter jobAdvertFilter) throws Exception;
}
