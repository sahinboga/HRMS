package com.hrms.hrms.business.abstracts;


import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.entities.concretes.User;

public interface UserService extends CrudService<User> {
	Result existsUserByEposta(String eposta) throws Exception;
	Result validate(User user)throws Exception;
	DataResult<User> getByEmail(String email) throws Exception;
	DataResult<User> getUserByUserId(int userId) throws Exception;
	
}
