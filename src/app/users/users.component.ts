import { Component, OnInit } from '@angular/core';
import usersList from 'src/assets/json/data.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users: any = usersList.users;
}
