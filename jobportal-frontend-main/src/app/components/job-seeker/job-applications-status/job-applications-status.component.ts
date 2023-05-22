import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-job-applications-status',
  templateUrl: './job-applications-status.component.html',
  styleUrls: ['./job-applications-status.component.css']
})
export class JobApplicationsStatusComponent implements OnInit {
  jobApplications:any;
  jobSeekerId:any;
  constructor(private router:Router,private jobseekerService:JobseekerService)
  {

  }
  ngOnInit(): void {
    this.jobSeekerId=sessionStorage.getItem('jobSeekerId');
    this.jobseekerService.getAllJobApplications(this.jobSeekerId).subscribe(
      response =>
      {
        this.jobApplications=response;
        console.log(this.jobApplications);
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
}
