import {Component, Input, OnInit} from '@angular/core'
import {Post} from '../model/post'

@Component({
  selector: 'blog-list',
  styles: [``],
  template: `
    <div class="columns">
      <section class="" *ngIf="postsList | async as posts; else postsLoading">
        <div *ngFor="let post of posts" class="">
          <h4><a [href]="'/posts/' + post.$key">{{post.post_title}}</a></h4>

          <p>
            <a [href]="'/users/' + post.user">{{post.user}}</a>
            <small>{{post.date | date}}</small>
          </p>
        </div>
      </section>
      

      <ng-template #postsLoading>
        <div>
          Loading...
        </div>
      </ng-template>
    </div>
  `,
})
export class BlogListComponent implements OnInit {

  @Input() postsList: Post[];

  constructor() { }

  ngOnInit() { }

}
