import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.component.html',
  styleUrls: ['./medicion.component.scss']
})
export class MedicionComponent {
  model: any;
  date: { year: number; month: number } | any;

  constructor(private calendar: NgbCalendar) { }
}
