import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('usuario') || sessionStorage.getItem('usuario')) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/iniciosesion'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
