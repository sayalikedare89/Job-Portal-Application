import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-update-profile',
  templateUrl: './jobseeker-update-profile.component.html',
  styleUrls: ['./jobseeker-update-profile.component.css']
})
export class JobseekerUpdateProfileComponent {

  constructor(private router:Router,private jobseekerService:JobseekerService)
  {

  }
  logout()
  {
    this.jobseekerService.jobSeekerLogout();
  }
}
