import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from '@app/models';
import { Subscription, map, tap } from 'rxjs';
import { AuthenticationService } from '../../services/auth.service';

@Directive({
  selector: '[appShowForRoles]',
})
export class ShowForRolesDirective implements OnInit {
  @Input('appShowForRoles') appShowForRoles?: Role[];
  private sub?: Subscription;

  constructor(
    private authService: AuthenticationService,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user$
      .pipe(
        map((user) =>
          Boolean(user && this.appShowForRoles?.includes(user.role))
        ),
        tap((hasRole) =>
          hasRole
            ? this.viewContainerRef.createEmbeddedView(this.templateRef)
            : this.viewContainerRef.clear()
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
