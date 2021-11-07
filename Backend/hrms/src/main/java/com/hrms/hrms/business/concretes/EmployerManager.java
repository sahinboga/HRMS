package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.EmployerService;
import com.hrms.hrms.core.utilities.business.BusinessRules;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
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
		Employer emp=this.employerDao.save(employer);
		return new SuccessDataResult<Employer>(emp,"İşveren Eklendi");
		
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

	@Override
	public Result isNull(Employer employer) throws Exception {

		if(employer.getCompanyName().isBlank() || employer.getWebsite().isBlank()|| employer.getPhone().isBlank()
			|| employer.getUser().getEmail().isBlank() || employer.getUser().getPassword().isBlank()) {
			
			return new ErrorResult("Tüm alanlar zorunludur!");
		}
		return new SuccessResult();
	}

	@Override
	public Result validate(Employer employer) throws Exception {
		Result result=BusinessRules.Run(isNull(employer));
		if(result!=null) {
			return result;
		}
		return new SuccessResult();
	}

}
