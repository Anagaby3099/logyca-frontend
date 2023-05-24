import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { DATA_TABLA, IDataTabla } from 'src/app/constantes/data-tabla.const';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  breakpoint!: number;
  displayedColumns: string[] = ['id', 'date', 'template'];
  data = new MatTableDataSource<IDataTabla>(DATA_TABLA);

  page: number = 1;
  pageSize: number = 10;
  hoveredDate: NgbDate | null = null;

  fromDate: any;
  toDate: NgbDate | null = null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.refreshData();
    this.breakpoint = window.innerWidth <= 700 ? 1 : 2;
  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 2;
  }

  refreshData(): void {
    // this.data = DATA_TABLA.map((dato, i) => ({ id: i + 1, ...dato })).slice(
    //   (this.page - 1) * this.pageSize,
    //   (this.page - 1) * this.pageSize + this.pageSize,
    // );
  }

  updateProductsPerPage() {
    this.page = 1;
    this.refreshData();
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  addPage(): void {
    this.page++;
    this.refreshData();
  }

  previousPage(): void {
    this.page--;
    this.refreshData();
  }
}
