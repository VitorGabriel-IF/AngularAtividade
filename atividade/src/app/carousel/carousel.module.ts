import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
