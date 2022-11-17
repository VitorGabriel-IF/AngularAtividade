import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CarouselComponent } from './carousel/carousel.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent 
  },
  {
    path: 'slide',
    component: CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
