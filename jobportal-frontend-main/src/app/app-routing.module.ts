import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './components/common/joblist/joblist.component';
import { JobseekerLoginComponent } from './components/job-seeker/jobseeker-login/jobseeker-login.component';
import { RecruiterSigninComponent } from './components/recruiter/recruiter-signin/recruiter-signin.component';
import { RecruiterSignupComponent } from './components/recruiter/recruiter-signup/recruiter-signup.component';
import { RecruiterProfileComponent } from './components/recruiter/recruiter-profile/recruiter-profile.component';
import { JobseekerProfileComponent } from './components/job-seeker/jobseeker-profile/jobseeker-profile.component';
import { JobApplicationsStatusComponent } from './components/job-seeker/job-applications-status/job-applications-status.component';
import { JobApplicantListComponent } from './components/recruiter/job-applicant-list/job-applicant-list.component';
import { JobDetailsComponent } from './components/common/job-details/job-details.component';
import { PostJobComponent } from './components/recruiter/post-job/post-job.component';
import { ErrorComponent } from './components/common/error/error.component';
import { JobseekerSignupComponent } from './components/job-seeker/jobseeker-signup/jobseeker-signup.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { JobseekerProfileImageComponent } from './components/job-seeker/jobseeker-profile-image/jobseeker-profile-image.component';
import { JobseekerResumeComponent } from './components/job-seeker/jobseeker-resume/jobseeker-resume.component';
import { JobseekerPasswordChangeComponent } from './components/job-seeker/jobseeker-password-change/jobseeker-password-change.component';
import { JobsCategoryComponent } from './components/common/jobs-category/jobs-category.component';
import { JobseekerUpdateProfileComponent } from './components/job-seeker/jobseeker-update-profile/jobseeker-update-profile.component';
import { RecruiterUpdateProfileComponent } from './components/recruiter/recruiter-update-profile/recruiter-update-profile.component';
import { RecruiterLogoComponent } from './components/recruiter/recruiter-logo/recruiter-logo.component';
import { UpdateJobComponent } from './components/recruiter/manage-jobs/update-job/update-job.component';
import { ManageJobsComponent } from './components/recruiter/manage-jobs/manage-jobs.component';
import { RecruiterChangePasswordComponent } from './components/recruiter/recruiter-change-password/recruiter-change-password.component';
import { AddJobComponent } from './components/recruiter/manage-jobs/add-job/add-job.component';

const routes: Routes = [
  {path:'', component:JoblistComponent},
  {path:'joblist', component:JoblistComponent},
  {path:'jobs/:id', component:JobsCategoryComponent },
  {path:'single-job/:id', component:JobDetailsComponent, canActivate: [AuthenticationGuard]},
  {path:'jobseeker-login', component:JobseekerLoginComponent, },
  {path:'jobseeker-signup', component:JobseekerSignupComponent,},
  {path:'jobseeker-profile', component:JobseekerProfileComponent, canActivate: [AuthenticationGuard]}, 
  {path:'jobseeker-image', component:JobseekerProfileImageComponent, canActivate: [AuthenticationGuard]},
  {path:'jobseeker-resume', component:JobseekerResumeComponent, canActivate: [AuthenticationGuard]},
  {path:'jobseeker-password-change', component:JobseekerPasswordChangeComponent, canActivate: [AuthenticationGuard]},
  {path:'jobseeker-profile-update', component:JobseekerUpdateProfileComponent, canActivate: [AuthenticationGuard]},
  {path:'jobseeker-applications-status', component:JobApplicationsStatusComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-login', component:RecruiterSigninComponent},
  {path:'recruiter-signup', component:RecruiterSignupComponent},
  {path:'manage-jobs', component:ManageJobsComponent, canActivate: [AuthenticationGuard]},
  {path:'manage-jobs/add-job', component:AddJobComponent, canActivate: [AuthenticationGuard]},
  {path:'manage-jobs/update-job', component:UpdateJobComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-logo', component:RecruiterLogoComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-profile', component:RecruiterProfileComponent, canActivate: [AuthenticationGuard]},
  {path:'job-applicant-list', component:JobApplicantListComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-profile-update', component:RecruiterUpdateProfileComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-add-job', component:PostJobComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-update-job', component:PostJobComponent, canActivate: [AuthenticationGuard]},
  {path:'recruiter-update-password', component:RecruiterChangePasswordComponent, canActivate: [AuthenticationGuard]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
