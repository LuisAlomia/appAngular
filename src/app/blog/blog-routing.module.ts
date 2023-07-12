import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [{ path: 'post-detail/:postId', component: DetailPostComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
