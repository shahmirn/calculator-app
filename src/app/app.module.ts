import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  PanelModule,
  ButtonModule,
  LayoutModule,
  MenuModule,
  SidebarModule,
  TopbarModule
} from '@slb-planck-ui/core-web-components';

import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    PanelModule,
    ButtonModule,
    LayoutModule,
    MenuModule,
    SidebarModule,
    TopbarModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
