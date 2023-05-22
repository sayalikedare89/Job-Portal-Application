package org.job.app.controller;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.job.app.dto.LoginDto;
import org.job.app.dto.SignUpDto;
import org.job.app.model.JobSeeker;
import org.job.app.model.Recruiter;
import org.job.app.model.Role;
import org.job.app.repository.JobSeekerRepository;
import org.job.app.repository.RoleRepository;
import org.job.app.repository.RecruiterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;


@RestController
@RequestMapping("/api/auth/jobseeker/")
@OpenAPIDefinition(info = @Info(title = "Job Seeker API", version = "v1"))
@CrossOrigin(origins = "http://localhost:4200/")
public class JobSeekerController {
	
	@Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder; 

    @PostMapping("signin")
    public ResponseEntity<Map<String, String>> authenticateUser(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        Map<String, String> response=new HashMap<>();
        response.put("message", "User signed-in successfully!");
        response.put("jobSeekerId", String.valueOf(this.jobSeekerRepository.findByEmail(loginDto.getUsernameOrEmail()).get().getId()));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){
    	 Map<String, String> response=new HashMap<>();
        // add check for username exists in a DB
        if(jobSeekerRepository.existsByUsername(signUpDto.getUsername())){
        	
        	response.put("message", "Username is already taken!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        // add check for email exists in DB
        if(jobSeekerRepository.existsByEmail(signUpDto.getEmail())){
        	response.put("message","Email is already taken!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        // create user object
        JobSeeker jobSeeker = new JobSeeker();
        jobSeeker.setName(signUpDto.getName());
        jobSeeker.setUsername(signUpDto.getUsername());
        jobSeeker.setEmail(signUpDto.getEmail());
        jobSeeker.setPassword(passwordEncoder.encode(signUpDto.getPassword()));

        Role roles = roleRepository.findByName("ROLE_JOBSEEKER").get();
        jobSeeker.setRoles(Collections.singleton(roles));

        jobSeekerRepository.save(jobSeeker);
        
       
        response.put("message", "JobSeeker registered successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
    
    
    @GetMapping("/{id}")
    public ResponseEntity<JobSeeker> getJobSeekerById(@PathVariable long id)
    {
    	return new  ResponseEntity<JobSeeker>(this.jobSeekerRepository.findById(id).get(),HttpStatus.OK);
    }
    
    @PutMapping("/profile/picture/{jobseekerId}")
    public ResponseEntity<JobSeeker>updateProfilePic(@RequestParam("image") MultipartFile image,@PathVariable long jobseekerId )
    {
    	
    		JobSeeker obj=this.jobSeekerRepository.findById(jobseekerId).get();
    		try 
    		{
				obj.setImage(image.getBytes());
			} 
    		catch (IOException e) {
				
				e.printStackTrace();
			}
    	
    	return new  ResponseEntity<JobSeeker>(this.jobSeekerRepository.save(obj),HttpStatus.OK);
    }
    
    @PutMapping("/profile/resume/{jobseekerId}")
    public ResponseEntity<JobSeeker>updateCv(@RequestParam("resume") MultipartFile image,@PathVariable long jobseekerId )
    {
    	
    		JobSeeker obj=this.jobSeekerRepository.findById(jobseekerId).get();
    		try 
    		{
				obj.setImage(image.getBytes());
			} 
    		catch (IOException e) {
				
				e.printStackTrace();
			}
    	
    	return new  ResponseEntity<JobSeeker>(this.jobSeekerRepository.save(obj),HttpStatus.OK);
    }
    
    
    @PutMapping("/profile/change/password/{jobseekerId}")
    public ResponseEntity<Map<String, String>> updatePassword(@RequestParam("oldPassword") String oldPassword,@RequestParam("newPassword") String newPassword,@PathVariable("jobseekerId")long jobseekerId  )
    {
    		Map<String, String> response=new HashMap<>();
    		JobSeeker obj=this.jobSeekerRepository.findById(jobseekerId).get();
    		//System.out.println(this.bCryptPasswordEncoder.encode(oldPassword));
    		//System.out.println(obj.getPassword());
    		if(bCryptPasswordEncoder.matches(oldPassword, obj.getPassword()))
    		{
    			
    			obj.setPassword(this.bCryptPasswordEncoder.encode(newPassword));
    			this.jobSeekerRepository.save(obj);
    			response.put("status", "true");
    			response.put("message", "Password updated!!");
    			return new  ResponseEntity<Map<String, String>>(response,HttpStatus.OK);
    		}
    		else
    		{
    			response.put("status", "false");
    			response.put("message", "Error in password!!");
    			return new  ResponseEntity<Map<String, String>>(response,HttpStatus.BAD_REQUEST);
    		}
    	
    }
    
    
    
    
    
    

}
