package org.job.app.model;

import java.sql.Date;
import java.sql.Timestamp;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Jobs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(length = 300)
	private String title;
	
	private String location;
	private String jobType;
	private long  numberOfVacancy;
	private int  salary;
	private int  experience;
	
	
	@Column(length = 1000)
	private String description;
	private boolean isActive;
	@Lob
	private byte[] image;
	private Timestamp lastDate;
	
	@CreationTimestamp
	private Timestamp createdAt;
	
	@UpdateTimestamp
	private Timestamp updatedAt;
	
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true,cascade = CascadeType.DETACH)
	private Category category;
	
	@ManyToOne( fetch = FetchType.EAGER, optional = true)
	private Recruiter recruiter;
	
	
	
	
}
