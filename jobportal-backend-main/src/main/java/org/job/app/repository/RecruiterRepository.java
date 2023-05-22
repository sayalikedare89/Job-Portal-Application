package org.job.app.repository;



import org.job.app.model.Recruiter;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;



import java.util.Optional;

public interface RecruiterRepository extends JpaRepository<Recruiter, Long> {
    Optional<Recruiter> findByEmail(String email);
    Optional<Recruiter> findByUsernameOrEmail(String username, String email);
    Optional<Recruiter> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
