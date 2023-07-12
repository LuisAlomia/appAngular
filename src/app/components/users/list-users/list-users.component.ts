import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ApiUser, User } from '../interfaces/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  private readonly usersServices: UsersService = inject(UsersService);
  public arrUsers: User[] = [];

  async ngOnInit() {
    const listUser: ApiUser = await this.usersServices.getAllUser();

    this.arrUsers = listUser.data;
  }
}
