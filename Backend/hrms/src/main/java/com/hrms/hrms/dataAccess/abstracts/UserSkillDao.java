package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hrms.hrms.entities.concretes.UserSkill;

public interface UserSkillDao extends JpaRepository<UserSkill,Integer>{
	@Modifying
	@Query( "DELETE FROM UserSkill us WHERE us.resume.resumeId = :resumeId") 
    int deleteByResume(@Param("resumeId") int resumeId);
}
