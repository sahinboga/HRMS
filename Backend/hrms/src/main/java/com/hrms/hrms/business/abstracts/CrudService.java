package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;

public interface CrudService<T>{
	DataResult<List<T>>  getAll();
	DataResult<T> add(T entity);
	Result delete(T entity);
	DataResult<T> update(T entity);
}
