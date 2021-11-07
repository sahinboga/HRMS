package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.UserSkillService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.UserSkillDao;
import com.hrms.hrms.entities.concretes.UserSkill;

@Service
public class UserSkillManager implements UserSkillService{
	
	private UserSkillDao userSkillDao;
	
	@Autowired
	public UserSkillManager(UserSkillDao userSkillDao) {
		super();
		this.userSkillDao = userSkillDao;
	}

	@Override
	public DataResult<List<UserSkill>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<UserSkill>>(this.userSkillDao.findAll(),"Kullanıcı yeteneği eklendi");
	}

	@Override
	public DataResult<UserSkill> add(UserSkill userSkill) throws Exception {
		UserSkill userSkl=this.userSkillDao.save(userSkill);
		return new SuccessDataResult<UserSkill>(userSkl,"Eklendi");
	}

	@Override
	public Result delete(UserSkill entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<UserSkill> update(UserSkill entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
