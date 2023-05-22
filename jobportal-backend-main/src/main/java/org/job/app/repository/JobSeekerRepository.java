package org.job.app.repository;

import java.util.Optional;

import org.job.app.model.JobSeeker;
import org.job.app.model.Recruiter;
import org.job.app.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobSeekerRepository extends JpaRepository<JobSeeker, Long> {

	 	Optional<JobSeeker> findByEmail(String email);
	    Optional<JobSeeker> findByUsernameOrEmail(String username, String email);
	    Optional<JobSeeker> findByUsername(String username);
	    Boolean existsByUsername(String username);
	    Boolean existsByEmail(String email);
}
