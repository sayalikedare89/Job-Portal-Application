import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-password-change',
  templateUrl: './jobseeker-password-change.component.html',
  styleUrls: ['./jobseeker-password-change.component.css']
})
export class JobseekerPasswordChangeComponent implements OnInit {
  jobSeekerId:any;
  jobseekerDetails:any;
  constructor(private router:Router,private jobSeekerService:JobseekerService)
  {

  }

  ngOnInit(): void {
    this.jobSeekerId=sessionStorage.getItem('jobSeekerId');
     this.jobSeekerService.jobSeekerDetails(this.jobSeekerId).subscribe(
        response =>{
          this.jobseekerDetails=response;
          console.log(this.jobseekerDetails);
        }

     );
      }
  logout()
  {
    sessionStorage.removeItem('status');
    if(confirm('are you sure??'))
    {
    this.router.navigate(['jobseeker-login']);
    }
  }


  changePassword(oldPassword:any, newPassword:any, retype:any)
  {
    console.log(oldPassword+' '+newPassword+' '+retype)
    if(newPassword==retype)
    {
    this.jobSeekerService.passwordUpdate(oldPassword,newPassword,this.jobSeekerId).subscribe(
      response =>{
        alert('Password updated successfully!!')
        this.router.navigate(['jobseeker-profile']);
        //this.ngOnInit();

      },
      error =>{
        alert('Something went wrong!!')
      }
    );
  }

else
{
  alert('New password and confirm password must be same!!');
}
  }
}
