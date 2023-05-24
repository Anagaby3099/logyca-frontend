import { Component, OnInit, ViewChild } from '@angular/core'; 
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
  
  fromDate: any;
  
  constructor(
  ) {
 
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
  addPage(): void {
    this.page++;
    this.refreshData();
  }
  previousPage(): void {
    this.page--;
    this.refreshData();
  }
}
