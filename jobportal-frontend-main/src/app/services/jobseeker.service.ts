import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeekerSignup } from '../models/JobseekerSignup';
import {Observable} from 'rxjs';
import { jobSeekerLogin } from '../models/JobseekerLogin';
@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  baseUrl="http://localhost:8080/api/auth/jobseeker/"
 
  constructor(private http:HttpClient, private route:Router) { }

  jobSeekerSignup(obj:jobSeekerSignup):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signup',body,{'headers':headers});
  }

  jobSeekerLogin(obj:jobSeekerLogin):Observable<Object>
  {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signin',body,{'headers':headers})

  }

  jobSeekerLogout()
  {
  
    if(confirm('are you sure??'))
    {
      sessionStorage.removeItem('status');
      sessionStorage.removeItem('role');
     this.route.navigate(['jobseeker-login']);
    }
  }

  jobApplication(jobId:any,jobSeekerId:any):Observable<Object>
  {
    return this.http.post("http://localhost:8080/api/job/application/applyjob/"+jobId+"/"+jobSeekerId,null);
  }


  jobSeekerDetails(id:any):Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/auth/jobseeker/"+id);
  }


  getAllJobApplications(jobseekerId:any):Observable<Object>
  {
    return this.http.get("http://localhost:8080/api/job/application/"+jobseekerId);
  }


  updateProfileImage(image:File,jobSeekerId:any):Observable<any>
  {
    const formData:FormData=new FormData();
  
    formData.append("image",image);
   
    
    return this.http.put("http://localhost:8080/api/auth/jobseeker/profile/picture/"+jobSeekerId,formData  );
  }


  updateResume(resume:File,jobSeekerId:any):Observable<any>
  {
    const formData:FormData=new FormData();
  
    formData.append("resume",resume);
   
    
    return this.http.put("http://localhost:8080/api/auth/jobseeker/profile/resume/"+jobSeekerId,formData  );
  }


  passwordUpdate(oldPassword:any,newPassword:any,jobSeekerId:any):Observable<Object>
  {
    const formData:FormData=new FormData();
    formData.append("oldPassword",oldPassword);
    formData.append("newPassword",newPassword);
    return this.http.put("http://localhost:8080/api/auth/jobseeker/profile/change/password/"+jobSeekerId,formData);
  }
}
