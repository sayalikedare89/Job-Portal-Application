import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterLogin } from 'src/app/models/RecruiterLogin';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-signin',
  templateUrl: './recruiter-signin.component.html',
  styleUrls: ['./recruiter-signin.component.css']
})
export class RecruiterSigninComponent implements OnInit{
  data:any;
  obj:any;
  status:any;
  role:any;
  constructor(private recruiterService:RecruiterService, private router:Router)
  {

  }
  ngOnInit(): void {

      this.status=sessionStorage.getItem('status');
      this.role=sessionStorage.getItem('role');
     if(this.status=='success' && this.role=='jobseeker')
      {
        this.router.navigate(['/jobseeker-profile']);
      }
      else if(this.status=='success' && this.role=='recruiter')
      {
        this.router.navigate(['/recruiter-profile']);
      }
  }

  onSubmit(obj:any)
  {
    
    console.log(obj.value);
    this.obj=new RecruiterLogin(obj.value.usernameOrEmail,obj.value.password);
    this.recruiterService.recruiterLogin(this.obj).subscribe(
      response =>
      {
        this.data=response;
        sessionStorage.setItem("status","success");
        sessionStorage.setItem("role","recruiter");
        sessionStorage.setItem("recruiterId",this.data.recruiterId);
        console.log(response)
        alert('Login successfull.\n You will be redirected to the login page..');
        this.router.navigate(['recruiter-profile']);
      },
      eresponse=>
      {
        console.log(eresponse)
        alert('incorrect username/email or password ');
      }
    );
  }
}
