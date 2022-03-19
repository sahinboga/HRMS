package com.hrms.hrms.business.abstracts;

import java.util.List;

import com.hrms.hrms.core.utilities.result.DataResult;
import com.hrms.hrms.entities.concretes.Role;

public interface RoleService {

	DataResult<List<Role>> getAll();
}
