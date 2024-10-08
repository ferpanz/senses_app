import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { FormComponent } from './pages/form/form.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiposComponent,
    FormComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
