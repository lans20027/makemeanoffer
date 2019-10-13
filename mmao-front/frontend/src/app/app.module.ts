import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { PageAboutComponent } from './page-about/page-about.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SendtaskComponent } from './sendtask/sendtask.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageAboutComponent,
    FooterComponent,
    SendtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
