import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MapComponent } from './map/map.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import {FlexModule} from "@angular/flex-layout";
import { RouteListItemComponent } from './route-list-item/route-list-item.component';
import {HttpRequestService} from "./services/HttpRequestService";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TextFieldComponent } from './text-field/text-field.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    MapComponent,
    HeaderBarComponent,
    RouteListItemComponent,
    TextFieldComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpRequestService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
