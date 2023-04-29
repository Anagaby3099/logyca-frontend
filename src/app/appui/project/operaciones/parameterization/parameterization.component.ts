import { Component } from '@angular/core';

@Component({
  selector: 'app-parameterization',
  templateUrl: './parameterization.component.html',
  styleUrls: ['./parameterization.component.scss'],
})
export class ParameterizationComponent {
  panelOpenState = false;
  customCollapsedHeight = '50px';
  customExpandedHeight: string = '50px';
}
