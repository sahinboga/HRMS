package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.Employer;

public interface EmployerService extends CrudService<Employer> {
	
	Result isNull(Employer employer) throws Exception;
	Result validate(Employer employer) throws Exception;
}
