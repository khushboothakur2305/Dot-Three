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
import { ArchitecturalComponent } from './ImageSlider/architectural/architectural.component';
import { InteriorComponent } from './ImageSlider/interior/interior.component';
import { FurnitureModuleComponent } from './ImageSlider/furniture-module/furniture-module.component';
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
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurProjectsComponent,
    ArchitecturalComponent,
    InteriorComponent,
    FurnitureModuleComponent,
    FooterComponent,
    HeaderComponent,
    ApartmentComponent,
    BunglowComponent,
    CafeComponent,
    DiningSetComponent,
    SingleUnitComponent,
    SofaComponent,
    StorageUnitComponent
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
