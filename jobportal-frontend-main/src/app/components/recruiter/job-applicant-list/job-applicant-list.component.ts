import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-job-applicant-list',
  templateUrl: './job-applicant-list.component.html',
  styleUrls: ['./job-applicant-list.component.css']
})
export class JobApplicantListComponent implements OnInit{
  recruiterId:any;
  recruiterDetails:any;
  applicationList:any;
  application:any;
  constructor(private router:Router, private recruiterService:RecruiterService)
  {

  }
  ngOnInit(): void {
    this.recruiterId=sessionStorage.getItem('recruiterId');
     this.recruiterService.recruiterDetails(this.recruiterId).subscribe(
        response =>{
          this.recruiterDetails=response;
          console.log(this.recruiterDetails);
        }

     );

     this.recruiterService.jobApplicationsByRecruiter(this.recruiterId).subscribe(
      response =>{
        this.applicationList=response;
      }
     );
  }

  statusUpdate()
  {
    console.log(this.application);
    this.recruiterService.updateJobApplicationstatus(this.application.status,this)
  }
  logout()
  {
    this.recruiterService.recruiterLogout();
  }
}
