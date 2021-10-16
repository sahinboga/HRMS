package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.JobSeekerService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.JobSeekerDao;
import com.hrms.hrms.entities.concretes.JobSeeker;

@Service
public class JobSeekerManager implements JobSeekerService {
	
	private JobSeekerDao jobSeekerDao;
	
	@Autowired
	public JobSeekerManager(JobSeekerDao jobSeekerDao) {
		super();
		this.jobSeekerDao = jobSeekerDao;
	}

	@Override
	public DataResult<List<JobSeeker>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<JobSeeker>>(this.jobSeekerDao.findAll(),"İş arayan listelendi.");
	}

	@Override
	public DataResult<JobSeeker> add(JobSeeker jobSeeker) {
		try {
			JobSeeker js= this.jobSeekerDao.save(jobSeeker);
			return new SuccessDataResult<JobSeeker>(js,"İş arayan eklendi");
		}catch(Exception e) {
			return new ErrorDataResult<JobSeeker>(null,e.getMessage());
		}
		
	}

	@Override
	public Result isNull(JobSeeker jobSeeker) {
		
		if(jobSeeker.getFirstName().isBlank() || jobSeeker.getLastName().isBlank()
			|| jobSeeker.getEmail().isBlank() || jobSeeker.getPassword().isBlank())
		{
			return new ErrorResult("Tüm alanlar zorunludur!");
		}
		return new SuccessResult();
	}

	@Override
	public Result delete(JobSeeker entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<JobSeeker> update(JobSeeker entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
