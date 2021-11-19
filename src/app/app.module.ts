import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MapComponent } from './map/map.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    MapComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
