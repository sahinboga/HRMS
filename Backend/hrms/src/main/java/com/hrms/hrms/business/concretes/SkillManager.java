package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.SkillService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.dataAccess.abstracts.SkillDao;
import com.hrms.hrms.entities.concretes.Skill;

@Service
public class SkillManager implements SkillService{
	
	private SkillDao skillDao;
	
	@Autowired
	public SkillManager(SkillDao skillDao) {
		super();
		this.skillDao = skillDao;
	}

	@Override
	public DataResult<List<Skill>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Skill>>(this.skillDao.findAll(),"Yetenek listelendi");
	}

	@Override
	public DataResult<Skill> add(Skill entity) throws Exception {

		Skill skill=this.skillDao.save(entity);
		return new SuccessDataResult<Skill>(skill,"Yetenek eklendi");
	}

	@Override
	public Result delete(Skill entity) throws Exception {
		
		this.skillDao.delete(entity);
		return new SuccessResult("Yetenek silindi");
	}

	@Override
	public DataResult<Skill> update(Skill entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
