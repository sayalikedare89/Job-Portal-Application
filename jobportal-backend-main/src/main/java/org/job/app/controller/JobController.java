package org.job.app.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.job.app.model.Category;
import org.job.app.model.Jobs;
import org.job.app.model.Recruiter;
import org.job.app.repository.CategoryRepository;
import org.job.app.repository.JobsRepository;
import org.job.app.repository.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;


@RestController
@RequestMapping("/api/job/")
@OpenAPIDefinition(info = @Info(title = "Job API", version = "v1"))
@CrossOrigin(origins = "http://localhost:4200/")
public class JobController {
	
	
	@Autowired
	private JobsRepository jobRepo; 
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private RecruiterRepository recruiterRepository;
	
	
	@PostMapping("/addjob")
	public ResponseEntity<Jobs> postJob(
			@RequestParam("title")String title,
			@RequestParam("description")String description,
			@RequestParam("salary")String salary,
			@RequestParam("experience")String experience,
			@RequestParam("location")String location,
			@RequestParam("jobType")String jobType,
			@RequestParam("numberOfVacancy")String numberOfVacancy,
			//@RequestParam("lastdate")String lastDate,
			//@RequestParam("image") MultipartFile image,
			
			@RequestParam("categoryId")String categoryId,
			@RequestParam("recruiterId")String recruiterId) throws IOException
	{
		
		Jobs job=new Jobs();
		job.setActive(true);
		job.setTitle(title);
		job.setDescription(description);
		job.setExperience(Integer.valueOf(experience));
		job.setLocation(location);
		job.setNumberOfVacancy(Integer.valueOf(numberOfVacancy));
		job.setJobType(jobType);
		job.setSalary(Integer.valueOf(salary));
		//job.setLastDate(new Date(lastDate))
		//job.setImage(image.getBytes());
		job.setCategory(this.categoryRepository.findById(new Long(categoryId)).get());
		job.setRecruiter(this.recruiterRepository.findById(new Long(recruiterId)).get());
		Jobs savedJob=this.jobRepo.save(job);
		
		return new ResponseEntity<Jobs>(savedJob,HttpStatus.CREATED);
	}
	
	
	@GetMapping("/jobs")
	public ResponseEntity<List<Jobs>> getAllJobs()
	{
		return new ResponseEntity<List<Jobs>>(this.jobRepo.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{jobId}")
	public ResponseEntity<Jobs> getJob(@PathVariable long jobId)
	{
		return new ResponseEntity<Jobs>(this.jobRepo.findById(jobId).get(), HttpStatus.OK);
	}
	
	@GetMapping("/category/{categoryId}")
	public ResponseEntity<List<Jobs>> getJobsByCategory(@PathVariable long categoryId)
	{
		Optional<Category> category=this.categoryRepository.findById(categoryId);
		
		return new ResponseEntity<List<Jobs>>(this.jobRepo.findByCategory(category.get()), HttpStatus.OK);
	
	}
	
	@GetMapping("/recruiter/{recruiterId}")
	public ResponseEntity<List<Jobs>> getJobsByRecruiter(@PathVariable Long recruiterId)
	{
		Optional<Recruiter> recruiter=this.recruiterRepository.findById(recruiterId);
		
		return new ResponseEntity<List<Jobs>>(this.jobRepo.findByRecruiter(recruiter.get()), HttpStatus.OK);
	
	}

}
