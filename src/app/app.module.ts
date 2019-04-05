import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { IntervalsModule } from './modules/intervals/intervals.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    IntervalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
