import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Home/home-page/home-page.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OurProjectsComponent } from './projects/our-projects/our-projects.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FooterComponent } from './Navigation/footer/footer.component';
import { HeaderComponent } from './Navigation/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ApartmentComponent } from './projects/architecture/apartment/apartment.component';
import { BunglowComponent } from './projects/architecture/bunglow/bunglow.component';
import { CafeComponent } from './projects/architecture/cafe/cafe.component';
import { DiningSetComponent } from './projects/furniture-module/dining-set/dining-set.component';
import { SingleUnitComponent } from './projects/furniture-module/single-unit/single-unit.component';
import { SofaComponent } from './projects/furniture-module/sofa/sofa.component';
import { StorageUnitComponent } from './projects/furniture-module/storage-unit/storage-unit.component';
import { TvUnitComponent } from './projects/furniture-module/tv-unit/tv-unit.component';
import { WallHungSofaComponent } from './projects/furniture-module/wall-hung-sofa/wall-hung-sofa.component';
import { BarComponent } from './projects/interior/bar/bar.component';
import { BedroomComponent } from './projects/interior/bedroom/bedroom.component';
import { DeskComponent } from './projects/interior/desk/desk.component';
import { Desk2Component } from './projects/interior/desk2/desk2.component';
import { KitchenComponent } from './projects/interior/kitchen/kitchen.component';
import { ShowroomComponent } from './projects/interior/showroom/showroom.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutDeveloperComponent } from './about/about-developer/about-developer.component';
import { EnquirybuttonComponent } from './Enquiry/enquirybutton/enquirybutton.component';
import { ArchitectureModuleComponent } from './projects/architecture/architecture-module/architecture-module.component';
import { InteriorModuleComponent } from './projects/interior/interior-module/interior-module.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurProjectsComponent,
    FooterComponent,
    HeaderComponent,
    ApartmentComponent,
    BunglowComponent,
    CafeComponent,
    DiningSetComponent,
    SingleUnitComponent,
    SofaComponent,
    StorageUnitComponent,
    TvUnitComponent,
    WallHungSofaComponent,
    BarComponent,
    BedroomComponent,
    DeskComponent,
    Desk2Component,
    KitchenComponent,
    ShowroomComponent,
    AboutUsComponent,
    AboutDeveloperComponent,
    EnquirybuttonComponent,
    ArchitectureModuleComponent,
    InteriorModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    NgImageSliderModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
