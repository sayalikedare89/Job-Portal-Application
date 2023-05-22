import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  status:any;
  role:any;
  constructor(private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      this.status=sessionStorage.getItem('status');
      this.role=sessionStorage.getItem('role');

      if(this.status=='success' && this.role=='jobseeker')
      {
        return true;
      }
      else if(this.status=='success' && this.role=='recruiter')
      {
        return true;
      }
        else
      {
        alert('please login to continue..')
        this.router.navigate(['jobseeker-login']);
        return false;
      }
  }
  
}
