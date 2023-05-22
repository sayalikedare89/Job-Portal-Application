import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent {
  recruiterId:any;
  recruiterDetails:any;
  jobList:any;
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

     this.recruiterService.jobspostedByRecruiter(this.recruiterId).subscribe(
      response =>{
        this.jobList=response;
      }
     );
  }
  logout()
  {
    this.recruiterService.recruiterLogout();
  }
}
