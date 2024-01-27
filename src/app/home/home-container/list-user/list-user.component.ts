import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../../../Services/user-data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})

export class ListUserComponent implements OnInit {
  users: any = [];
  constructor(private SingletonService: SingletonService) {
  }

  ngOnInit(): void {
    this.SingletonService.data$.subscribe(data => {
      this.users = data;
    });
  }
}
