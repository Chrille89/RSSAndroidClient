import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolemRssComponent } from "./golem-rss/golem-rss.component";
import { TagesschauRssComponent } from './tagesschau-rss/tagesschau-rss.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'golem', component:GolemRssComponent },
  { path: 'tagesschau', component:TagesschauRssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
