import { Component, inject } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  private readonly postServices: BlogService = inject(BlogService);

  public postList: Post[] = [];
  public postDetail: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  async ngOnInit(): Promise<void> {
    this.postList = await this.postServices.getAllPost();
  }

  async chageId(id: number): Promise<void> {
    this.postDetail = await this.postServices.getPostDetail(id);
  }
}
