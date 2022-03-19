package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.RoleService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.RoleDao;
import com.hrms.hrms.entities.concretes.Role;

@Service
public class RoleManager implements RoleService {

	private RoleDao roleDao;
	
	@Autowired
	public RoleManager(RoleDao roleDao) {
		super();
		this.roleDao = roleDao;
	}
	@Override
	public DataResult<List<Role>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Role>>(this.roleDao.findAll(),"Roller listelendi.");
	}

}
