package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.SchoolService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.SchoolDao;
import com.hrms.hrms.entities.concretes.School;

@Service
public class SchoolManager implements SchoolService{
	
	private SchoolDao schoolDao;
	
	@Autowired
	public SchoolManager(SchoolDao schoolDao) {
		super();
		this.schoolDao = schoolDao;
	}

	@Override
	public DataResult<List<School>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<School>>(this.schoolDao.findAll(),"Okul listelendi");
	}

	@Override
	public DataResult<School> add(School entity) throws Exception {

		School school=this.schoolDao.save(entity);
		return new SuccessDataResult<School>(school,"Okul eklendi");
	}

	@Override
	public Result delete(School entity) throws Exception {
		
		this.schoolDao.delete(entity);
		return new SuccessResult("Okul silindi");
	}

	@Override
	public DataResult<School> update(School entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
