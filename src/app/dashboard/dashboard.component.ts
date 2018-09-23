import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  employees: any;
  ngOnInit() {
    this.db.list('/employees').snapshotChanges().subscribe(
      data => {
        this.employees = data;
     }
    );
  }

}
