import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  recruiterId:any;
  recruiter:any;
  job:Job=new Job();
  constructor(private router:Router, private recruiterService:RecruiterService)
  {

  }
  ngOnInit(): void {
    this.recruiterId=sessionStorage.getItem('recruiterId');
     this.recruiterService.recruiterDetails(this.recruiterId).subscribe(
        response =>{
          this.recruiter=response;
          console.log(this.recruiter);
        }

     );
  }

  addJob()
  {
    //alert(this.recruiter);
    this.job.recruiterId=this.recruiterId;
    console.log(this.job);
    this.recruiterService.postJob(this.job).subscribe(
      response =>{
        alert('New job posted successfully!!');
        this.router.navigate(['manage-jobs']);
      }
    );
    
  }
  logout()
  {
    this.recruiterService.recruiterLogout();
  }
}
