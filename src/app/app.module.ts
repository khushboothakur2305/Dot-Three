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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OurProjectsComponent,
    ArchitecturalComponent,
    InteriorComponent,
    FurnitureModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
