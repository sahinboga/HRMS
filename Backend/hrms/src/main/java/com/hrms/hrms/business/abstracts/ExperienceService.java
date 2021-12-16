package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.Experience;

public interface ExperienceService extends CrudService<Experience>{
	public DataResult<List<Experience>> getAllSorted();
}
