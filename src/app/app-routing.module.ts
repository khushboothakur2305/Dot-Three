import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { OurProjectsComponent } from './projects/our-projects/our-projects.component';
import { ShowroomComponent } from './projects/interior/showroom/showroom.component';
import { KitchenComponent } from './projects/interior/kitchen/kitchen.component';
import { Desk2Component } from './projects/interior/desk2/desk2.component';
import { DeskComponent } from './projects/interior/desk/desk.component';
import { BedroomComponent } from './projects/interior/bedroom/bedroom.component';
import { BarComponent } from './projects/interior/bar/bar.component';
import { WallHungSofaComponent } from './projects/furniture-module/wall-hung-sofa/wall-hung-sofa.component';
import { TvUnitComponent } from './projects/furniture-module/tv-unit/tv-unit.component';
import { StorageUnitComponent } from './projects/furniture-module/storage-unit/storage-unit.component';
import { SofaComponent } from './projects/furniture-module/sofa/sofa.component';
import { SingleUnitComponent } from './projects/furniture-module/single-unit/single-unit.component';
import { DiningSetComponent } from './projects/furniture-module/dining-set/dining-set.component';
import { CafeComponent } from './projects/architecture/cafe/cafe.component';
import { BunglowComponent } from './projects/architecture/bunglow/bunglow.component';
import { ApartmentComponent } from './projects/architecture/apartment/apartment.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutDeveloperComponent } from './about/about-developer/about-developer.component';
import { ArchitectureModuleComponent } from './projects/architecture/architecture-module/architecture-module.component';
import { InteriorModuleComponent } from './projects/interior/interior-module/interior-module.component';
import { FurnitureModuleComponent } from "./projects/furniture-module/furniture-module/furniture-module.component";
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'our-projects', component: OurProjectsComponent },
  { path: 'showroom', component: ShowroomComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'desk2', component: Desk2Component },
  { path: 'desk', component: DeskComponent },
  { path: 'bedroom', component: BedroomComponent },
  { path: 'bar', component: BarComponent },
  { path: 'wall-hung-sofa', component: WallHungSofaComponent },
  { path: 'tv-unit', component: TvUnitComponent },
  { path: 'storage-unit', component: StorageUnitComponent },
  {path:'sofa',component:SofaComponent},
  {path:'single-unit',component:SingleUnitComponent},
  {path:'dining-set',component:DiningSetComponent},
  {path:'cafe',component:CafeComponent},
  {path:'bunglow',component:BunglowComponent},
  {path:'apartment',component:ApartmentComponent},
  {path:'about', component:AboutUsComponent},
  {path:'developer',component:AboutDeveloperComponent},
  {path:'architecture-module',component:ArchitectureModuleComponent},
  {path:'interior-module',component:InteriorModuleComponent},
  {path:'furniture-module',component:FurnitureModuleComponent},
  {path:'contactus' , component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
