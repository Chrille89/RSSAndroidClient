import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolemRssComponent } from "./golem-rss/golem-rss.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'golem', component:GolemRssComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
