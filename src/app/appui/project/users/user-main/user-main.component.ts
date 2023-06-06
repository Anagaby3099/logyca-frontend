import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  items!: MenuItem[];
  home!: MenuItem;

  constructor(){}

  ngOnInit() {
    this.items = [{ label: 'Crear Usuarios' }];

    this.home = { icon: 'none', label: 'Usuarios', routerLink: '/usuarios' };
}
}
