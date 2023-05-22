import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeekerLogin } from 'src/app/models/JobseekerLogin';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-login',
  templateUrl: './jobseeker-login.component.html',
  styleUrls: ['./jobseeker-login.component.css']
})
export class JobseekerLoginComponent implements OnInit{
  status:any;
  role:any;
  obj:any;
  constructor(private jobSeekerService:JobseekerService, private router:Router)
  {

  }
  
    ngOnInit(): void {

      this.status=sessionStorage.getItem('status');
       this.role=sessionStorage.getItem('role');
      if(this.status=='success' && this.role=='jobseeker')
       {
         this.router.navigate(['/jobseeker-profile']);
       }
       else if(this.status=='success' && this.role=='recruiter')
       {
         this.router.navigate(['/recruiter-profile']);
       }
   }
  
data:any;
  onSubmit(obj:any)
  {
    console.log(obj.value);
    this.obj=new jobSeekerLogin(obj.value.usernameOrEmail,obj.value.password);
    this.jobSeekerService.jobSeekerLogin(this.obj).subscribe(
      response =>
      {
        this.data=response;
        sessionStorage.setItem("status","success");
        sessionStorage.setItem("role","jobseeker");
        sessionStorage.setItem("jobSeekerId",this.data.jobSeekerId);
        console.log(response)
        alert('Login successfull.\n You will be redirected to the login page..');
        this.router.navigate(['jobseeker-profile']);
      },
      eresponse=>
      {
        console.log(eresponse)
        alert('incorrect username/email or password ');
      }
    );
  }
}
