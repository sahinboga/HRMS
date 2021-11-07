package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.CompanySectorService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.CompanySectorDao;
import com.hrms.hrms.entities.concretes.CompanySector;

@Service
public class CompanySectorManager implements CompanySectorService{
	
	private CompanySectorDao companySectorDao;
	
	@Autowired
	public CompanySectorManager(CompanySectorDao companySectorDao) {
		super();
		this.companySectorDao = companySectorDao;
	}

	@Override
	public DataResult<List<CompanySector>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<CompanySector>>(this.companySectorDao.findAll(),"Şirket sektörü listelendi");
	}

	@Override
	public DataResult<CompanySector> add(CompanySector entity) throws Exception {

		CompanySector companySector=this.companySectorDao.save(entity);
		return new SuccessDataResult<CompanySector>(companySector,"Şirket sektörü eklendi");
	}

	@Override
	public Result delete(CompanySector entity) throws Exception {

		this.companySectorDao.delete(entity);
		return new SuccessResult("Sektör silindi");
	}

	@Override
	public DataResult<CompanySector> update(CompanySector entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
