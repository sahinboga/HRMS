package com.hrms.hrms.core.utilities.business;

import com.hrms.hrms.core.utilities.result.Result;

public class BusinessRules {
	
	public static Result Run(Result...results) {
		
		for(Result logic:results) {
			if(!logic.isSuccess()) {
				return logic;
			}
		}
		return null;
	}
	
}
