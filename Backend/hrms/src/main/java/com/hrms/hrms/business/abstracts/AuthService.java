package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.Employer;
import com.hrms.hrms.entities.concretes.JobSeeker;
import com.hrms.hrms.entities.concretes.User;
import com.hrms.hrms.entities.dtos.UserForLoginDto;

public interface AuthService{
	
	DataResult<User> login(UserForLoginDto loginDto) throws Exception;
	Result registerForJobSeeker(JobSeeker jobSeeker) throws Exception;
	Result registerForEmployer(Employer employer) throws Exception;
}
