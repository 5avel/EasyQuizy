import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[];

  total = 0;
  page = 1;
  limit = 3;

  constructor(private userService: UserService) { }

  ngOnInit() {

    // this.userService.getNumber().subscribe((value: number) => {
    //     this.totalRecords = value;
    // });

    // this.userService.getRange(1, 5).subscribe((value: User[]) => {
    //   this.users = value;
    // });
    this.users = [
      {id: '1', displayName: 'user1', firstName: 'fn1', lastName: 'ln1', email: 'em@i.l1'},
      {id: '2', displayName: 'user2', firstName: 'fn2', lastName: 'ln2', email: 'em@i.l2'},
      {id: '3', displayName: 'user3', firstName: 'fn3', lastName: 'ln3', email: 'em@i.l3'},
      {id: '4', displayName: 'user4', firstName: 'fn4', lastName: 'ln4', email: 'em@i.l4'},
      {id: '5', displayName: 'user5', firstName: 'fn5', lastName: 'ln5', email: 'em@i.l5'}
    ];

    this.total = this.users.length;
  }

  goToPrevious(): void {
    // console.log('Previous Button Clicked!');
    this.page--;
    //this.getOrders();
  }

  goToNext(): void {
    // console.log('Next Button Clicked!');
    this.page++;
    //this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    //this.getOrders();
  }

}
