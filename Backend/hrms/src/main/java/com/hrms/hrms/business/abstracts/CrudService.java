package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.core.utilities.result.Result;

public interface CrudService<T>{
	DataResult<List<T>>  getAll() throws Exception;
	DataResult<T> add(T entity) throws Exception;
	Result delete(T entity) throws Exception;
	DataResult<T> update(T entity) throws Exception;
}
