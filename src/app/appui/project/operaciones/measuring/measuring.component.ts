import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-measuring',
  templateUrl: './measuring.component.html',
  styleUrls: ['./measuring.component.scss']
})
export class MeasuringComponent {
  model: any;
  date: { year: number; month: number } | any;

  constructor(private calendar: NgbCalendar) { }
}
