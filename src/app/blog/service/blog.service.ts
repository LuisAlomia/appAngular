import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly baseUrl: string =
    'https://jsonplaceholder.typicode.com/posts';

  getAllPost(): Promise<Post[]> {
    return firstValueFrom(this.httpClient.get<Post[]>(`${this.baseUrl}`));
  }

  getPostDetail(postId: string | number): Promise<Post> {
    return firstValueFrom(
      this.httpClient.get<Post>(`${this.baseUrl}/${postId}`)
    );
  }
}
