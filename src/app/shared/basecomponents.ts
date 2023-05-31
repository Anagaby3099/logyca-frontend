import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';

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
