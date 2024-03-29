import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponents } from '@app/shared/basecomponents';
import { MobileDetectService } from '@app/shared/mobiledetector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent extends BaseComponents implements OnInit, OnDestroy {
  breakpoint!: number;
  isMobile!: boolean;
  isMobileSubscription!: Subscription; 

  constructor(private fb: FormBuilder, private mobileDetector: MobileDetectService){
    super();
    this.createForm();
  }

  ngOnInit(): void {
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

  private createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }
}
