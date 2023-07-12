import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './components/post/post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { TitleComponent } from '../share/components/title/title.component';

@NgModule({
  declarations: [PostComponent, DetailPostComponent],
  imports: [CommonModule, BlogRoutingModule, HttpClientModule, TitleComponent],
})
export class BlogModule {}
