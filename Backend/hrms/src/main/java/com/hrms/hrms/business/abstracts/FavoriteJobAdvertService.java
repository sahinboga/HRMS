package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.FavoriteJobAdvert;

public interface FavoriteJobAdvertService extends CrudService<FavoriteJobAdvert>{
	
	DataResult<List<FavoriteJobAdvert>> getFavoriteJobAdvert(int jobSeekerId) throws Exception;
	DataResult<FavoriteJobAdvert> deleteByJobAdvertId(int id) throws Exception;
}
