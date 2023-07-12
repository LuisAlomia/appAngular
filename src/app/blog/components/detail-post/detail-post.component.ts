import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent {
  @Input() postDetail!: Post;
}
