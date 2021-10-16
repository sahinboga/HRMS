package com.hrms.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.AuthService;
import com.hrms.hrms.business.abstracts.JobSeekerService;
import com.hrms.hrms.business.abstracts.UserService;
import com.hrms.hrms.core.utilities.business.BusinessRules;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.core.utilities.security.HashingHelper;
import com.hrms.hrms.entities.concretes.Employer;
import com.hrms.hrms.entities.concretes.JobSeeker;
import com.hrms.hrms.entities.concretes.User;
import com.hrms.hrms.entities.dtos.UserForLoginDto;
@Service
public class AuthManager implements AuthService {
	
	

	private JobSeekerService jobSeekerService;
	private UserService userService;
	
	@Autowired
	public AuthManager(JobSeekerService jobSeekerService,UserService userService) {
		super();
		this.jobSeekerService = jobSeekerService;
		this.userService=userService;
	}
	@Override
	public DataResult<User> login(UserForLoginDto loginDto) {
		DataResult<User> UserToCheck= this.userService.getByEmail(loginDto.getEmail());
		if(UserToCheck.getData()==null) {
			return new ErrorDataResult<User>("E-posta hatalı!");
		}
		if(!HashingHelper.VerifyPasswordHash(loginDto.getPassword(), UserToCheck.getData().getPassword())) {
			return new ErrorDataResult<User>("Şifre hatalı!");
		}
		UserToCheck.getData().setPassword(null);
		return new SuccessDataResult<User>(UserToCheck.getData(),"Giriş başarılı");
	}

	@Override
	public Result registerForJobSeeker(JobSeeker jobSeeker) {
		
		// iş kuralları
		Result result=BusinessRules.Run(this.userService.existsUserByEposta(jobSeeker.getEmail()),this.jobSeekerService.isNull(jobSeeker));
		if(result!=null) {
			return result;
		}
		
		DataResult<User> userAddResult= this.userService.add(jobSeeker);
		if(!userAddResult.isSuccess()) {
			return userAddResult;
		}
		
		jobSeeker.setUserId(userAddResult.getData().getUserId());
		DataResult<JobSeeker> jobSeekerAddResult=this.jobSeekerService.add(jobSeeker);
		if(!jobSeekerAddResult.isSuccess()) {
			this.userService.delete(userAddResult.getData());
			return jobSeekerAddResult;
		}
		return new SuccessResult("Kayıt başarılı.");
	}

	@Override
	public Result registerForEmployer(Employer employer) {
		// TODO Auto-generated method stub
		return null;
	}

}
