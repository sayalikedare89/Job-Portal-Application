import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecruiterSignup } from '../models/RecruiterSignup';
import { RecruiterLogin } from '../models/RecruiterLogin';
import { Recruiter } from '../models/Recruiter';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

 
  baseUrl="http://localhost:8080/api/auth/recruiter/"
 
  constructor(private http:HttpClient, private route:Router) { }

 recruiterSignup(obj:RecruiterSignup):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signup',body,{'headers':headers});
  }

  recruiterLogin(obj:RecruiterLogin):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signin',body,{'headers':headers})

  }

  recruiterDetails(id:any):Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/auth/recruiter/"+id);
  }

  
  jobs():Observable<Object>
  {
    
    return this.http.get("http://localhost:8080/api/job/jobs");

  }
  
  job(jobId:any):Observable<Object>
  {
    
    return this.http.get("http://localhost:8080/api/job/"+jobId);

  }

  jobsByCategory(categoryId:any):Observable<Object>
  {
    
    return this.http.get("http://localhost:8080/api/job/category/"+categoryId);

  }

  recruiterProfileUpdate(id:any, obj:Recruiter):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.put("http://localhost:8080/api/auth/recruiter/profile/update/"+id,obj);
  }

  recruiterLogout()
  {
    
    if(confirm('are you sure??'))
    {
      
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('role');
    this.route.navigate(['recruiter-login']);
    }
  }

  jobspostedByRecruiter(recruiterId:any):Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/job/recruiter/"+recruiterId);
  }


  jobApplicationsByRecruiter(recruiterId:any):Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/job/application/recruiter/"+recruiterId);
  }

  postJob(obj:any):Observable<Object>
  {
    const formData: FormData = new FormData();
    formData.append("title", obj.title);
    formData.append("description", obj.description);
    formData.append("salary", obj.salary);
    formData.append("experience", obj.experience);
    formData.append("location", obj.location);
    formData.append("jobType", obj.jobType);
    formData.append("numberOfVacancy", obj.numberOfVacancy);
    formData.append("categoryId", obj.categoryId);
    formData.append("recruiterId", obj.recruiterId);

    return this.http.post("http://localhost:8080/api/job/addjob",formData);
  }

  updateJobApplicationstatus(status:any,id:any):Observable<Object>
  {
    const formData: FormData = new FormData();
    formData.append("status", status);
    return this.http.put("http://localhost:8080/api/job/application/status/"+id,status);
  }
}
