import { Component } from '@angular/core';

@Component({
  selector: 'app-measuring',
  templateUrl: './measuring.component.html',
  styleUrls: ['./measuring.component.scss']
})
export class MeasuringComponent {
  breakpoint!: number;
  model: any;
  date: { year: number; month: number } | any;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 4;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 4;
  }
}
