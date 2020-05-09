import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselLisaComponent } from './carousel-lisa.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CarouselLisaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CarouselLisaComponent
  ]
})
export class CarouselLisaModule { }
