import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng-carousel-cdk';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, SafeHtmlPipe } from './home.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule
  ]
})
export class HomeModule { }
