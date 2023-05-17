import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-comp',
  template: '',
})
export class BaseComponents implements OnInit, OnDestroy {
  myForm!: FormGroup;
  loadinglist: boolean = false;

  get loading() {
    return this.loadinglist;
  }
  set loading(value: boolean) {
    this.loadinglist = value;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
