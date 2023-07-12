import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { TitleComponent } from './share/components/title/title.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: ListUsersComponent,
    children: [
      {
        path: 'user-detail/:userId',
        component: DetailUserComponent,
      },
    ],
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./blog/blog.module').then((modu) => modu.BlogModule),
  },
  { path: 'send-form', component: SendFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ListUsersComponent,
    DetailUserComponent,
    SendFormComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TitleComponent,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
