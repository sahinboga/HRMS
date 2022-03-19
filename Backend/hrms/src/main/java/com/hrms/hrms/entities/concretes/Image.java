package com.hrms.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="images")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Image {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="image_id")
	private int imageId;

	@Column(name="image_name")
	private String imageName;

	@Column(name="image_path")
	private String imagePath;
	
	@Column(name="created_at")
	private String createdAt;
}
