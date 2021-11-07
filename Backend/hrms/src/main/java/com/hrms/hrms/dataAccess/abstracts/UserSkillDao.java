package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.UserSkill;

public interface UserSkillDao extends JpaRepository<UserSkill,Integer>{

}
