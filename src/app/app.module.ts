import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDrawingModule } from 'ngx-image-drawing';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageDrawingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
