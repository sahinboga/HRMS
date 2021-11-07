package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.Resume;

public interface ResumeService extends CrudService<Resume>{
	
	DataResult<Resume> getResumeByResumeId(int resumeId);
}
