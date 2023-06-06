import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  breakpoint!: number;
  displayedColumns: string[] = [
    'user',
    'position',
    'phone',
    'email',
    'actions'
  ];
  @ViewChild('ustable') ustable!: Table;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  users = [
    {
      id: 1,
      id_sol: '#4445',
      user: 'Mariana',
      position: 'Contador',
      email: 'marin@gmail.com',
      phone: '123123',
    },
    {
      id: 2,
      id_sol: '#4445',
      user: 'Mariana',
      position: 'Contador',
      email: 'marin@gmail.com',
      phone: '123123',
    },
    {
      id: 3,
      id_sol: '#4445',
      user: 'Mariana',
      position: 'Contador',
      email: 'marin@gmail.com',
      phone: '123123',
    },
    {
      id: 4,
      id_sol: '#4445',
      user: 'Mariana',
      position: 'Contador',
      email: 'marin@gmail.com',
      phone: '123123',
    },
  ];
  dataSource = new MatTableDataSource<any>(this.users);

  constructor() {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 2;
    this.configSource();
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 2;
  }

  tableFilter($event: any) {
    this.ustable.filterGlobal($event.target.value, 'contains');
  }

  configSource(){
    this.dataSource = new MatTableDataSource<any>(this.users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
