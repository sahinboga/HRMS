package com.hrms.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.hrms.business.abstracts.WorkTypeService;
import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;
import com.hrms.hrms.core.utilities.result.SuccessDataResult;
import com.hrms.hrms.dataAccess.abstracts.WorkTypeDao;
import com.hrms.hrms.entities.concretes.WorkType;

@Service
public class WorkTypeManager implements WorkTypeService{
	
	private WorkTypeDao workTypeDao;
	
	@Autowired
	public WorkTypeManager(WorkTypeDao workTypeDao) {
		super();
		this.workTypeDao = workTypeDao;
	}

	@Override
	public DataResult<List<WorkType>> getAll() throws Exception {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<WorkType>>(this.workTypeDao.findAll(),"Çalışma tipi listlendi");
	}

	@Override
	public DataResult<WorkType> add(WorkType entity) throws Exception {
		
		WorkType workType=this.workTypeDao.save(entity);
		return new SuccessDataResult<WorkType>(workType,"Çalışma tipi eklendi");
	}

	@Override
	public Result delete(WorkType entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DataResult<WorkType> update(WorkType entity) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
