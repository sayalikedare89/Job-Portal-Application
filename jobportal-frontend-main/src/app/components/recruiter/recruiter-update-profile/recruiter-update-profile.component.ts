import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-update-profile',
  templateUrl: './recruiter-update-profile.component.html',
  styleUrls: ['./recruiter-update-profile.component.css']
})
export class RecruiterUpdateProfileComponent implements OnInit {
  recruiterId:any;
  recruiter:any;
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

  updateProfile()
  {
    //alert(this.recruiter);
    console.log(this.recruiter);
    this.recruiterService.recruiterProfileUpdate(this.recruiterId,this.recruiter).subscribe(
      response =>{
        alert('Profile details updated!!')
        this.ngOnInit();
      }
    );
  }
  logout()
  {
    this.recruiterService.recruiterLogout();
  }
}
