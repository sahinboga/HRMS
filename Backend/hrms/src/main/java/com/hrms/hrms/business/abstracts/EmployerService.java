package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.Image;
import com.hrms.hrms.entities.concretes.Employer;

public interface EmployerService extends CrudService<Employer> {
	
	Result isNull(Employer employer) throws Exception;
	Result validate(Employer employer) throws Exception;
	DataResult<Employer> getEmployerById(int employerId) throws Exception;
	Result uploadLogo(int id, Image image);
	public Result deleteLogo(int id) throws Exception;
}
