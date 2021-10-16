package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.EmployerService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.EmployerDao;
import com.hrms.hrms.entities.concretes.Employer;

@Service
public class EmployerManager implements EmployerService {
	
	private EmployerDao employerDao;
	
	@Autowired
	public EmployerManager(EmployerDao employerDao) {
		super();
		this.employerDao = employerDao;
	}

	@Override
	public DataResult<List<Employer>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Employer>>(this.employerDao.findAll(),"İşveren listelendi");
	}

	@Override
	public DataResult<Employer> add(Employer employer) {
		try {
			Employer emp=this.employerDao.save(employer);
			return new SuccessDataResult<Employer>(emp,"İşveren Eklendi");
		}catch(Exception e) {
			return new ErrorDataResult<Employer>(null,e.getMessage());
		}
		
	}

	@Override
	public Result delete(Employer entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Employer> update(Employer entity) {
		// TODO Auto-generated method stub
		return null;
	}

}
