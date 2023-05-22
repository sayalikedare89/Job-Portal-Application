package org.job.app.repository;

import java.util.List;

import org.job.app.model.JobApplication;
import org.job.app.model.JobSeeker;
import org.job.app.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

	public List<JobApplication> findByJobSeeker(JobSeeker jobSeeker);
	public List<JobApplication> findByRecruiter(Recruiter recruiter);
}
