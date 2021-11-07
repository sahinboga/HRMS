package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.JobPositionService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.JobPositionDao;
import com.hrms.hrms.entities.concretes.JobPosition;

@Service
public class JobPositionManager implements JobPositionService {
	
	private JobPositionDao jobPositionDao;
	
	@Autowired
	public JobPositionManager(JobPositionDao jobPositionDao) {
		super();
		this.jobPositionDao = jobPositionDao;
	}

	@Override
	public DataResult<List<JobPosition>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<JobPosition>>(this.jobPositionDao.findAll(),"İş pozisyonları listelendi.");
	}

	@Override
	public DataResult<JobPosition> add(JobPosition jobPosition) {
	
		JobPosition jp =this.jobPositionDao.save(jobPosition);
		return new SuccessDataResult<JobPosition>(jp,"İş pozisyonu eklendi.");
		
	}

	@Override
	public Result delete(JobPosition jobPosition) {
		
		this.jobPositionDao.delete(jobPosition);
		return new SuccessResult("İş pozisyonu silindi");
	}

	@Override
	public DataResult<JobPosition> update(JobPosition entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
