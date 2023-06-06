import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-master',
  templateUrl: './users-master.component.html',
  styleUrls: ['./users-master.component.scss']
})
export class UsersMasterComponent implements OnInit {
  breakpoint!: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 700 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 700 ? 1 : 2;
  }
}
