package org.job.app.repository;

import org.job.app.model.Category;
import org.job.app.model.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
