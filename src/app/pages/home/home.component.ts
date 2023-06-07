import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/auth.service';
import { IRuta, ROUTES_CONFIG } from '@app/constantes/routes.const';
import { MobileDetectService } from '@app/shared/mobiledetector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  showSideBar: boolean = true;
  rutas: IRuta[] = ROUTES_CONFIG;
  rutaImg: string = '/assets/descargar.jpg';
  isMobile!: boolean;
  isMobileSubscription!: Subscription; 

  constructor(private athService: AuthenticationService, private mobileDetector: MobileDetectService) {}

  ngOnInit(){
    this.isMobileSubscription = this.mobileDetector.isMobile$.subscribe(
      (is_mobile) => {
        this.isMobile = is_mobile; 
        console.log("@mobile", is_mobile);
      },
      (error) => console.log("-- Error detecting device --", error)
    )
  }

  ngOnDestroy(){
    if(this.isMobileSubscription){
      this.isMobileSubscription.unsubscribe();
    }
  }

  logout() {
    this.athService.logout();
  }

  toogleSideBar(): void {
    this.showSideBar = !this.showSideBar;
  }
}
