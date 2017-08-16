import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Post} from '../model/post'
import {PostsService} from '../services/post'

@Component({
  selector: 'create-article',
  styles: [``],
  template: `
    <div class="container">
      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-2">
              Create Post
            </h1>
            <h2 class="subtitle is-4">
              Blog post subtitle
            </h2>
          </div>
        </div>
      </section>

      <section class="section blog">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="content blog-post section">
                <!--<form [formGroup]="form">-->
                  <!--<label>-->
                    <!--<h3>Post Title</h3>-->
                    <!--<input-->
                      <!--type="text"-->
                      <!--placeholder='enter post title'-->
                      <!--formControlName="post_title">-->
                    <!---->
                  <!--</label>-->
                  <!--<label>-->
                    <!--<h3>Post Body</h3>-->
                    <!--<input-->
                      <!--type="text"-->
                      <!--placeholder='enter post body'-->
                      <!--formControlName="post_body">-->
                    <!---->
                  <!--</label>-->
                  <!---->
                  <!---->
                <!--</form>-->


                <form class="column is-half" autocomplete="off" novalidate [formGroup]="form" (submit)="submitForm($event)">
                  <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                      <input class="input" type="text" placeholder="Enter post Title" formControlName="post_title">
                    </div>
                  </div>
                  
                  <div class="field">
                    <label class="label">Body</label>
                    <div class="control">
                      <textarea class="textarea" placeholder="Enter post Body" formControlName="post_body"></textarea>
                    </div>
                  </div>

                  <div class="field" style="margin: 1em 0">
                    <div class="control">
                      <button class="button is-primary" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class CreateArticleComponent implements OnInit {

  form = this.fb.group({
    post_title: ['', Validators.required],
    post_body: ['', Validators.required]
  });

  constructor(private postsService: PostsService, private fb: FormBuilder) { }

  ngOnInit() { }

  submitForm(e) {
    this.postsService.addPost(this.form)
  }
}
