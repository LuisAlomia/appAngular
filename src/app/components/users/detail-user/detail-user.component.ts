import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ApiUserDetail, User } from '../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent {
  private readonly usersService: UsersService = inject(UsersService);
  private readonly activateRoute: ActivatedRoute = inject(ActivatedRoute);

  public userDetail: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  async ngOnInit() {
    this.activateRoute.params.subscribe(async (params) => {
      const user: ApiUserDetail = await this.usersService.getUserDetail(
        params['userId']
      );

      this.userDetail = user.data;
    });
  }
}
