import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobId:any;
  job:any;
  jobSeekerId:any;
  constructor(private _Activatedroute:ActivatedRoute,private recruiterService:RecruiterService,private jobSeekerService:JobseekerService)
  {
   
  }
  ngOnInit(): void {
    this.jobId=this._Activatedroute.snapshot.paramMap.get("id");
    this.jobSeekerId=sessionStorage.getItem('jobSeekerId');
    console.log(this.jobId);
    this.recruiterService.job(this.jobId).subscribe(
      response =>{
        this.job=response;
        console.log(this.job);
      }
     );
  }
  applyForJob(jobId:any,jobSeekerId:any)
  {
   // alert(jobId);
    //alert(jobSeekerId);

    this.jobSeekerService.jobApplication(jobId,jobSeekerId).subscribe(

      response => {
        alert('Your have successfully applied for the job!!')
      }
    );
  }
}
