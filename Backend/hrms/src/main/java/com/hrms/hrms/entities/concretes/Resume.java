package com.hrms.hrms.entities.concretes;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="resumes")
@Entity
public class Resume {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="resume_id")
	private int resumeId;
	
	@Column(name="birth_date")
	private LocalDate birthDate;
	
	@Column(name="adress")
	private String adress;
	
	@Column(name="phone")
	private String phone;
	
	@Column(name="linkedin")
	private String linkedin;
	
	@Column(name="github")
	private String github;
	
	@Column(name="summary")
	private String summary;
	
	@ManyToOne
	@JoinColumn(name="image_id")
	private Image image;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<Education> educations;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<Experience> experiences;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<UserLanguage> userLanguages;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToMany(mappedBy = "resume")
	private List<UserSkill> skills;
	
	@JsonProperty(access = Access.READ_ONLY)
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "jobseeker_id", nullable = false)
	private JobSeeker jobSeeker;
}
