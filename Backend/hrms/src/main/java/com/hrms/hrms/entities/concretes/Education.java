package com.hrms.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="educations")
@Entity
public class Education {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="education_id")
	private int educationId;
	
	@Column(name="starting_date")
	private int startingDate;
	
	@Column(name="graduation_date")
	private int graduationDate;
	

	@Column(name="school_type")
	private String schoolType;
	
	@ManyToOne()
	@JoinColumn(name="school_id")
	private School school;
	
	@ManyToOne()
	@JoinColumn(name="department_id")
	private Department department;
	
	@ManyToOne()
	@JsonProperty(access = Access.WRITE_ONLY)
	@JoinColumn(name="resume_id")
	private Resume resume;
}
