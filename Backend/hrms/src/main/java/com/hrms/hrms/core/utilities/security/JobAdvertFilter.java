package com.hrms.hrms.core.utilities.security;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobAdvertFilter {
	
	private List<Integer> cityId;
	private List<Integer>  jobPositionId;
	private List<Integer>  workTypeId;
	private List<Integer>  companySectorId;
	private List<Integer> status;

}
