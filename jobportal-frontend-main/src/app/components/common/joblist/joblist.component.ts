import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit{
  
  jobs:any;
  
  constructor(private recruiterService:RecruiterService)
  {
  }
  
  ngOnInit() {
   this.recruiterService.jobs().subscribe(
    response =>{
      this.jobs=response;
      console.log(this.jobs);
    }
   );
  }


}
