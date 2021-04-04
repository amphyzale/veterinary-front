import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TokenStorageService } from './helpers/token-storage.service';
import { AuthenticationService } from './pages/authentication/shared/authentication.service';

/**
 * Guad переходов на страницы, требующие авторизации.
 */
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  /** Признак выполненной проуедуры входа */
  private loggedIn: boolean;

  constructor(
    private authService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {
    this.loggedIn = !!this.tokenStorageService.getToken();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/login') {
      if (this.loggedIn) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    } else {
      if (!this.loggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}

