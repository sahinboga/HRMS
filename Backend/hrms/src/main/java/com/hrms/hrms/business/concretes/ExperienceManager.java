package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.ExperienceService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.ExperienceDao;
import com.hrms.hrms.entities.concretes.Experience;

@Service
public class ExperienceManager implements ExperienceService{
	
	private ExperienceDao experienceDao;
	
	@Autowired
	public ExperienceManager(ExperienceDao experienceDao) {
		super();
		this.experienceDao = experienceDao;
	}

	@Override
	public DataResult<List<Experience>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Experience>>(this.experienceDao.findAll(),"Deneyim listlendi");
	}

	@Override
	public DataResult<Experience> add(Experience experience) throws Exception {
		Experience exp= this.experienceDao.save(experience);
		return new SuccessDataResult<Experience>(exp,"deneyim Eklendi");
	}

	@Override
	public Result delete(Experience entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Experience> update(Experience entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
