package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.Education;
public interface EducationService extends CrudService<Education>{
	
	//DataResult<List<Education>> getByJobSeekerId(int jobSeekerId) throws Exception;
	public DataResult<List<Education>> getAllSorted();
}
