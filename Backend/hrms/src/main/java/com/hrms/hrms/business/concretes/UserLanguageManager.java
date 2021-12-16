package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.UserLanguageService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.UserLanguageDao;
import com.hrms.hrms.entities.concretes.UserLanguage;

@Service
public class UserLanguageManager implements UserLanguageService{
	
	private UserLanguageDao userLanguageDao;
	
	@Autowired
	public UserLanguageManager(UserLanguageDao userLanguageDao) {
		super();
		this.userLanguageDao = userLanguageDao;
	}

	@Override
	public DataResult<List<UserLanguage>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<UserLanguage>>(this.userLanguageDao.findAll(),"Kullanıcı dili listelendi");
	}

	@Override
	public DataResult<UserLanguage> add(UserLanguage userLanguage) throws Exception {

		UserLanguage userLang=this.userLanguageDao.save(userLanguage);
		return new SuccessDataResult<UserLanguage>(userLang,"Eklendi");
	}

	@Override
	public Result delete(UserLanguage entity) throws Exception {
		
		this.userLanguageDao.delete(entity);
		return new SuccessResult("Dil Silindi");
	}

	@Override
	public DataResult<UserLanguage> update(UserLanguage entity) throws Exception {
		
		UserLanguage current=this.userLanguageDao.getById(entity.getUserLanguageid());
		current.setLanguage(entity.getLanguage());
		current.setLevel(entity.getLevel());
		this.userLanguageDao.save(current);
		return new SuccessDataResult<UserLanguage>(null,"Dil güncellendi");
	}

}
