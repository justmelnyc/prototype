import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/post'
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import {Post} from '../model/post'

@Component({
  selector: 'blog-page',
  template: `
    <section class="hero is-danger is-medium header-image">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            Yuli Blog Yall
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <button (click)="nextPosts()">Next posts</button>
      <blog-list [postsList]="posts$"></blog-list>
    </div>
  `,
  styles: [`
    .header-image {
      background-size: cover;
      background: linear-gradient(rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.59)), url('https://images.unsplash.com/photo-1488558980948-81db7f6c239c?dpr?dpr=2&auto=format&fit=crop&w=1500&h=1011&q=80&cs=tinysrgb&crop=') center;
    }
  `]
})
export class BlogPageComponent implements OnInit {

  private postsLimit = 5;
  posts$;

  public post$: Observable<Post>;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPosts({query: {
      limitToFirst: this.postsLimit
    }})
      .publishReplay().refCount(); // to avoid multiple subscribe network load
  }

  nextPosts() {

    this.posts$ = this.posts$.switchMap(posts => {
      const startAt = posts[posts.length - 1].$key;
      return this.postService.loadNextPage(startAt, this.postsLimit);
    });
  }

}
