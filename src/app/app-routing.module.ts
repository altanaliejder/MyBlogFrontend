
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { SubjectComponent } from './components/subject/subject.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SearchStoryComponent } from './components/search-story/search-story.component';
import { StoryComponent } from './components/story/story.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  { path: "", pathMatch: "full", component: StoryComponent },
  { path: "", component: SubjectComponent },
  { path: "", component: NavbarComponent },
  { path: "story", component: StoryComponent },
  { path: "story/search/:keyword", component: SearchStoryComponent },
  { path: "story/subject/:subjectId", component: StoryComponent },
  { path: "login", component: LoginComponent },
  { path: "signin", component: SignInComponent },
  { path: "story/user/:userId", component: StoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
