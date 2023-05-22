import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-menu',
  templateUrl: './recruiter-menu.component.html',
  styleUrls: ['./recruiter-menu.component.css']
})
export class RecruiterMenuComponent implements OnInit {
  recruiterId:any;
  recruiterDetails:any;
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
  }
  logout()
  {
    this.recruiterService.recruiterLogout();
  }
}
