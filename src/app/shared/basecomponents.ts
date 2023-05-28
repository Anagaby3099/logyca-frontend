import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-base-comp',
  template: '',
})
export class BaseComponents {
  myForm!: FormGroup;
  loadinglist: boolean = false;

  get loading() {
    return this.loadinglist;
  }
  set loading(value: boolean) {
    this.loadinglist = value;
  }

  constructor(){}
}
