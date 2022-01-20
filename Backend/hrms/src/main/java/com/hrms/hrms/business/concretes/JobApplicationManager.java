package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.JobApplicationService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.JobApplicationDao;
import com.hrms.hrms.entities.concretes.JobApplication;

@Service
public class JobApplicationManager implements JobApplicationService{
	
	private JobApplicationDao jobApplicationDao;
	
	@Autowired
	public JobApplicationManager(JobApplicationDao jobApplicationDao) {
		super();
		this.jobApplicationDao = jobApplicationDao;
	}
	
	@Override
	public DataResult<List<JobApplication>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<JobApplication> add(JobApplication entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result delete(JobApplication entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<JobApplication> update(JobApplication entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result apply(JobApplication application) throws Exception{
		// TODO Auto-generated method stub
		
		if(this.jobApplicationDao.existsByJobSeeker_IdAndJobAdvertisement_Id(application.getJobSeeker().getId(), application.getJobAdvertisement().getId())) {
			return new ErrorResult("Bu ilana zaten başvuru yaptınız");
		}
		this.jobApplicationDao.save(application);
		return new SuccessResult("Başvurunuz gerçekleştirildi");
	}

	@Override
	public DataResult<List<JobApplication>> getAllByJobAdvertId(int id) throws Exception{
		return new SuccessDataResult<List<JobApplication>>(this.jobApplicationDao.getAllByJobAdvertisement_Id(id));
	}

	@Override
	public DataResult<List<JobApplication>> getAllByJobSeekerId(int id) throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<JobApplication>>(this.jobApplicationDao.getAllByJobSeeker_Id(id));
	}


}
