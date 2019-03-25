import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisteredPage } from './pages/registered/registered.page';
import { IndexPage } from './pages/index/index.page';
import { AboutPage } from './pages/about/about.page';
import { HelpPage } from './pages/help/help.page';
import { StoryPage } from './pages/story/story.page';
import { PersonalCenterPage } from './pages/personal-center/personal-center.page';
import { ReleaseStoryPage } from './pages/release-story/release-story.page';
import { StoryDetailPage } from './pages/story-detail/story-detail.page';

const routes: Routes = [
    { path: '', component: IndexPage },
    { path: 'login', component: LoginPage },
    { path: 'registered', component: RegisteredPage },
    { path: 'about', component: AboutPage },
    { path: 'help', component: HelpPage },
    { path: 'story', component: StoryPage },
    { path: 'personalCenter', component: PersonalCenterPage },
    { path: 'releaseStory', component: ReleaseStoryPage },
    { path: 'storyDetail/:id', component: StoryDetailPage },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
