import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeHolderTxt: string = '';

  debouncer: Subject<string> = new Subject();
  term: string = '';

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  onKeyPress() {
    this.debouncer.next(this.term);
  }
}
