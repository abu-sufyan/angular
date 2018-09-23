import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  employees: any;
  ngOnInit() {
    this.employees = this.db.list('/employees').valueChanges();
  }

}
