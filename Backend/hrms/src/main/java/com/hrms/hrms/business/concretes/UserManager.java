package com.hrms.hrms.business.concretes;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.UserService;
import com.hrms.hrms.core.utilities.business.BusinessRules;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.ErrorDataResult;
import com.hrms.hrms.core.utilities.result.ErrorResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.core.utilities.result.SuccessResult;
import com.hrms.hrms.core.utilities.security.HashingHelper;
import com.hrms.hrms.dataAccess.abstracts.UserDao;
import com.hrms.hrms.entities.concretes.User;

@Service
public class UserManager implements UserService{
	
	private UserDao userDao;
	
	@Autowired
	public UserManager(UserDao userDao) {
		super();
		this.userDao = userDao;
	}
	@Override
	public DataResult<List<User>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<User>>(this.userDao.findAll(),"Kullanıcılar listelendi");
	}
	@Override
	public DataResult<User> add(User user) throws Exception {
		user.setPassword(HashingHelper.CreatePasswordHash(user.getPassword()));
		User u= this.userDao.save(user);
		
		return new SuccessDataResult<User>(u,"Kullanıcı eklendi");
		
	}
	@Override
	public Result existsUserByEposta(String email) {
		boolean exists=this.userDao.existsByEmail(email);
		if(exists) {
			return new ErrorResult("Bu eposta kullanılmaktadır.");
		}
		else {
			return new SuccessResult();
		}
		
	}
	@Override
	
	public Result delete(User user) {
		this.userDao.delete(user);
		return new SuccessResult("Kullanıcı silindi");
	}
	@Override
	public DataResult<User> update(User entity) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public DataResult<User> getByEmail(String email) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<User>(this.userDao.getByEmail(email));
	}
	@Override
	public Result validate(User user) throws Exception {
		Result result =BusinessRules.Run(existsUserByEposta(user.getEmail()));
		if(result!=null) {
			return result;
		}
		return new SuccessResult();
	}
	@Override
	public DataResult<User> getUserByUserId(int userId) throws Exception {
		User user=userDao.getUserByUserId(userId);
		return new SuccessDataResult<User>(user);
	}

}
