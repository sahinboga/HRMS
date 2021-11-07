package com.hrms.hrms.entities.concretes;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="favorite_job_adverts")
@Entity
public class FavoriteJobAdvert {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="favorite_id")
	private int favoriteId;
	
	@ManyToOne()
	@JoinColumn(name="jobseeker_id")
	private JobSeeker jobSeeker;
	
	@ManyToOne()
	@JoinColumn(name="job_advert_id")
	private JobAdvertisement jobAdvert;
}
