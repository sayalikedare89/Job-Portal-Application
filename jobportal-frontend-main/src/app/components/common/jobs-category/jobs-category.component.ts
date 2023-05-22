import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrls: ['./jobs-category.component.css']
})
export class JobsCategoryComponent implements OnInit  {
  jobs:any;
  jobCategoryId:any;

  constructor(private recruiterService:RecruiterService,private _Activatedroute:ActivatedRoute,private router: Router)
  {
    this.jobCategoryId=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(this.jobCategoryId);
  }
  
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
   this.recruiterService.jobsByCategory(this.jobCategoryId).subscribe(
    response =>{
      this.jobs=response;
      console.log(this.jobs);
    }
   );
  }
}
