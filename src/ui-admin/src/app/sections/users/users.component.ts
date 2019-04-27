import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  totalRecords: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getNumber().subscribe((value: number) => {
        this.totalRecords = value;
    });

    this.userService.getRange(1, 5).subscribe((value: User[]) => {
      this.users = value;
    });
  }

}
