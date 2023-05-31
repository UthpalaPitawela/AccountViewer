import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class AuthorizationGuardService {

  constructor(private authService: AuthService, private router: Router) {
    }
  canActivate(route: any): boolean {
    if (this.authService.isLoggedIn() && this.authService.getRole() === route.data.role) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
    
  }
}

export const authorizationGuard: CanActivateFn = (route, state) => {
  return inject(AuthorizationGuardService).canActivate(route);
};

