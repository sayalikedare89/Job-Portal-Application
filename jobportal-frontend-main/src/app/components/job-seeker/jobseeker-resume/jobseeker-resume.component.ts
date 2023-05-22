import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-resume',
  templateUrl: './jobseeker-resume.component.html',
  styleUrls: ['./jobseeker-resume.component.css']
})
export class JobseekerResumeComponent implements OnInit{
  files:any;
  target:any;
  jobSeekerId:any;
  jobseekerDetails:any;
  constructor(private router:Router,private jobseekerService:JobseekerService)
  {

  }

  ngOnInit(): void {
    this.jobSeekerId=sessionStorage.getItem('jobSeekerId');
     this.jobseekerService.jobSeekerDetails(this.jobSeekerId).subscribe(
        response =>{
          this.jobseekerDetails=response;
          console.log(this.jobseekerDetails);
        }

     );
      }
  handleFileInput(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.files = this.target.files as FileList;
    //console.log(this.files);
    
  }

updateResume()
{

  this.jobseekerService.updateResume(this.files[0],this.jobSeekerId).subscribe(
  response =>{console.log(response);
   alert('Resume Updated Successfully');
             }
);
            }

  passwordChange()
  {
    
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
