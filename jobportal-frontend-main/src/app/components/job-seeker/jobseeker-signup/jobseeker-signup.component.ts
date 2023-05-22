import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeekerSignup } from 'src/app/models/JobseekerSignup';
import { JobseekerService } from 'src/app/services/jobseeker.service';

@Component({
  selector: 'app-jobseeker-signup',
  templateUrl: './jobseeker-signup.component.html',
  styleUrls: ['./jobseeker-signup.component.css']
})
export class JobseekerSignupComponent {

  obj:any;
  constructor(private jobSeekerService:JobseekerService, private router:Router)
  {

  }

  onSubmit(obj:any)
  {
    console.log(obj.value);

    if(obj.value.password==obj.value.repassword)
    {
    
    this.obj=new jobSeekerSignup(obj.value.name,obj.value.username,obj.value.email,obj.value.password);
    this.jobSeekerService.jobSeekerSignup(this.obj).subscribe(
      response=>
      {
        console.log(response)
        alert('Registration successfull.\n.You will be redirected to the login page');
        this.router.navigate(['jobseeker-login']);
        
      },
      eresponse=>
      {
        console.log(eresponse)
        alert(eresponse.error.message);
      }
    );
  }
  else
  {
    alert('Password and Retype password must be same!!');
      
  }
  }
}
