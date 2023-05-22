package org.job.app.repository;

import java.util.List;

import org.job.app.model.Category;
import org.job.app.model.JobApplication;
import org.job.app.model.Jobs;
import org.job.app.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface JobsRepository extends JpaRepository<Jobs, Long>{
	
	//@Query("select j from jobs j WHERE j.category_id = ?1")
	public List<Jobs> findByCategory(Category category);
	public List<Jobs> findByRecruiter(Recruiter recruiter);
}
