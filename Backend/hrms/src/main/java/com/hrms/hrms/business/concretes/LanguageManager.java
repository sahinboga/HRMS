package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.LanguageService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.LanguageDao;
import com.hrms.hrms.entities.concretes.Language;

@Service
public class LanguageManager implements LanguageService{
	
	private LanguageDao languageDao;
	
	@Autowired
	public LanguageManager(LanguageDao languageDao) {
		super();
		this.languageDao = languageDao;
	}

	@Override
	public DataResult<List<Language>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Language>>(this.languageDao.findAll(),"Dil listelendi");
	}

	@Override
	public DataResult<Language> add(Language entity) throws Exception {

		Language lang=this.languageDao.save(entity);
		
		return new SuccessDataResult<Language>(lang,"Dil Eklendi");
	}

	@Override
	public Result delete(Language entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Language> update(Language entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
