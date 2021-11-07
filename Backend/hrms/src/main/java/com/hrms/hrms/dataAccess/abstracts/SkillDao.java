package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.Skill;

public interface SkillDao extends JpaRepository<Skill, Integer>{

}
