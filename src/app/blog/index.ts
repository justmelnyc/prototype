import {ModuleWithProviders, NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/';
import { BlogPageComponent, BlogListComponent, BlogArticleComponent, CreateArticleComponent } from './components/'
import { PostsService } from './services/post'
import { PostsPaginationService } from './services/pagination'
import {ReactiveFormsModule} from '@angular/forms'

const COMPONENTS = [CreateArticleComponent, BlogPageComponent, BlogListComponent, BlogArticleComponent]
const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'create', component: CreateArticleComponent },
  { path: ':id', component: BlogArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class BlogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BlogModule,
      providers: [
        PostsService,
        PostsPaginationService
      ]
    };
  }
}
