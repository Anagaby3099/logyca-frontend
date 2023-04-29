import { Component } from '@angular/core';

@Component({
  selector: 'app-vectorization',
  templateUrl: './vectorization.component.html',
  styleUrls: ['./vectorization.component.scss'],
})
export class VectorizationComponent {
  panelOpenState = false;
  customCollapsedHeight = '50px';
  customExpandedHeight: string = '50px';
}
