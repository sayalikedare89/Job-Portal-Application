import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterSignup } from 'src/app/models/RecruiterSignup';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-signup',
  templateUrl: './recruiter-signup.component.html',
  styleUrls: ['./recruiter-signup.component.css']
})
export class RecruiterSignupComponent {
  obj:any;
  constructor(private recruiterService:RecruiterService, private router:Router)
  {

  }

  onSubmit(obj:any)
  {
    console.log(obj.value);

    if(obj.value.password==obj.value.repassword)
    {
    
    this.obj=new RecruiterSignup(obj.value.name,obj.value.username,obj.value.email,obj.value.password);
    this.recruiterService.recruiterSignup(this.obj).subscribe(
      response=>
      {
        //console.log(response)
        alert('Registration successfull.\n  You will be redirected to the login page.');
        this.router.navigate(['recruiter-login']);
        
      },
      eresponse=>
      {
        console.log(eresponse)
        alert('Registration successfull.\n  You will be redirected to the login page.');
      }
    );
  }
  else
  {
    alert('Password and Retype password must be same!!');
      
  }
  }
}
