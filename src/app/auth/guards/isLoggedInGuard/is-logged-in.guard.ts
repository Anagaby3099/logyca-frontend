import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/auth.service';
import { take, tap } from 'rxjs';

export const AuthGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    take(1),
    tap((isLoggedIn) => (!isLoggedIn ? router.navigate(['/login']) : true))
  );
};
