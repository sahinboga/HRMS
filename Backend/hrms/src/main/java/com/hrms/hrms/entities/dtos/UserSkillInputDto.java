package com.hrms.hrms.entities.dtos;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSkillInputDto {
	
	private int resumeId;
	private int[] skillIds;
}
