import { Component, OnInit } from '@angular/core';
import { MobileDetectService } from '@app/shared/mobiledetector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parameterization',
  templateUrl: './parameterization.component.html',
  styleUrls: ['./parameterization.component.scss'],
})
export class ParameterizationComponent implements OnInit {
  panelOpenState = false;
  customCollapsedHeight = '50px';
  customExpandedHeight: string = '50px';

  breakpoint!: number;
  isMobile!: boolean;
  isMobileSubscription!: Subscription;

  constructor(private mobileDetector: MobileDetectService){

  }

  ngOnInit(){
    this.breakpoint = window.innerWidth <= 700 ? 1 : 4;
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

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 4;
  }

}
