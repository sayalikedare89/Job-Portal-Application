import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-profile-image',
  templateUrl: './jobseeker-profile-image.component.html',
  styleUrls: ['./jobseeker-profile-image.component.css']
})
export class JobseekerProfileImageComponent implements OnInit {
  jobSeekerId:any;
  jobseekerDetails:any;
  demoImage:any="/assets/images/user.png";
  files:any;
  target:any;
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

  updateImage()
  {
    
    this.jobseekerService.updateProfileImage(this.files[0],this.jobSeekerId).subscribe(
      response =>{console.log(response);
       alert('Image Updated Successfully');
                 }
    );

    //console.log(this.post);
  
  }
  logout()
  {
    this.jobseekerService.jobSeekerLogout();
  }
}
