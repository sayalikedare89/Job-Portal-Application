package org.job.app.controller;

import java.util.List;
import java.util.Map;

import org.job.app.model.JobApplication;
import org.job.app.model.Jobs;
import org.job.app.repository.JobApplicationRepository;
import org.job.app.repository.JobSeekerRepository;
import org.job.app.repository.JobsRepository;
import org.job.app.repository.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/api/job/application")
@OpenAPIDefinition(info = @Info(title = "Job API", version = "v1"))
@CrossOrigin(origins = "http://localhost:4200/")
public class JobApplicationController {
	
	@Autowired
	private JobApplicationRepository jobApplicationRepository;
	
	@Autowired
	private RecruiterRepository recruiterRepository;
	
	@Autowired
	private JobSeekerRepository jobSeekerRepository;
	
	@Autowired
	private JobsRepository jobsRepository;
	
	@PostMapping("/applyjob/{jobId}/{jobseekerId}")
	public ResponseEntity<JobApplication> jobApplication(@PathVariable("jobId")long jobId,@PathVariable("jobseekerId")long jobseekerId)
	{
		System.out.println(jobId+" "+jobseekerId);
		JobApplication jobApplication=new JobApplication();
		jobApplication.setStatus("Awaiting for recruiter action");
		if(this.jobsRepository.findById(jobId).isPresent())
		{
			jobApplication.setJob(this.jobsRepository.findById(jobId).get());
		}
		
		if(this.jobSeekerRepository.findById(jobseekerId).isPresent())
		{
			jobApplication.setJobSeeker(this.jobSeekerRepository.findById(jobseekerId).get());
		}
		return new ResponseEntity<JobApplication>(this.jobApplicationRepository.save(jobApplication),HttpStatus.CREATED);
	}
	
	@GetMapping("/{jobseekerId}")
	public ResponseEntity<List<JobApplication>> getJobApplicationsByJobSeekerId(@PathVariable("jobseekerId")long jobseekerId)
	{
		return new ResponseEntity<List<JobApplication>>(this.jobApplicationRepository.findByJobSeeker(this.jobSeekerRepository.findById(jobseekerId).get()),HttpStatus.OK);
	}
	
	@GetMapping("/recruiter/{recruiterId}")
	public ResponseEntity<List<JobApplication>> getJobApplicationsByRecruiterId(@PathVariable("recruiterId")long recruiterId)
	{
		return new ResponseEntity<List<JobApplication>>(this.jobApplicationRepository.findByRecruiter(this.recruiterRepository.findById(recruiterId).get()),HttpStatus.OK);
	}

}
