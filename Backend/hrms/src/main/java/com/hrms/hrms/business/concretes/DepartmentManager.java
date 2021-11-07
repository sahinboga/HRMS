package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.DepartmentService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.DepartmentDao;
import com.hrms.hrms.entities.concretes.Department;

@Service
public class DepartmentManager implements DepartmentService{
	
	private DepartmentDao departmentDao;
	
	@Autowired
	public DepartmentManager(DepartmentDao departmentDao) {
		super();
		this.departmentDao = departmentDao;
	}

	@Override
	public DataResult<List<Department>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Department>>(this.departmentDao.findAll(),"Bölüm listelendi");
	}

	@Override
	public DataResult<Department> add(Department entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result delete(Department entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<Department> update(Department entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
