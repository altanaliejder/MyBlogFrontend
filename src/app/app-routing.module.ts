import { SearchStoryComponent } from './components/search-story/search-story.component';
import { StoryComponent } from './components/story/story.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: StoryComponent },
  { path: "story", component: StoryComponent },
  { path: "story/search/:keyword", component: SearchStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
