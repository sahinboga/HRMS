package com.hrms.hrms.business.abstracts;

import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.UserSkill;
import com.hrms.hrms.entities.dtos.UserSkillInputDto;

public interface UserSkillService extends CrudService<UserSkill>{
	
	Result update(UserSkillInputDto skill) throws Exception;
}
