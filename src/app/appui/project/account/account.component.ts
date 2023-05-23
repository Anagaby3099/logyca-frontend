import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponents } from '@app/shared/basecomponents';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent extends BaseComponents implements OnInit {
  breakpoint!: number;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 4;
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
