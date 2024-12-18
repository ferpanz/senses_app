import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { TiposComponent } from './pages/tipos/tipos.component';

const routes: Routes = [

{
  path:"form",
  component: FormComponent
},
{
  path:"",
  component: HomeComponent
},
{
  path:"tipos",
  component: TiposComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
