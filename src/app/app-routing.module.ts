import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { OurProjectsComponent } from './projects/our-projects/our-projects.component';


const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'our-projects',component:OurProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
