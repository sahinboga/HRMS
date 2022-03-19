package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.Image;
import com.hrms.hrms.entities.concretes.Resume;

public interface ResumeService extends CrudService<Resume>{
	
	DataResult<Resume> getResumeByJobSeeker_id(int jsId);
	
	public Image getUserImage(int id);
	public Result updateResumePhoto(int id, Image image) throws Exception;
	public Result deleteResumePhoto(int id) throws Exception;
}
