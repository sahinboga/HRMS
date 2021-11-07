package com.hrms.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hrms.hrms.entities.concretes.CompanySector;

public interface CompanySectorDao extends JpaRepository<CompanySector, Integer>{

}
