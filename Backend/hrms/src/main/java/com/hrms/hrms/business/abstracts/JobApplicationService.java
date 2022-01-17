package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.JobApplication;

public interface JobApplicationService extends CrudService<JobApplication>{
	
	Result apply(JobApplication application) throws Exception;
	DataResult<List<JobApplication>> getAllByJobAdvertId(int id) throws Exception;
	DataResult<List<JobApplication>> getAllByJobSeekerId(int id) throws Exception;
}
