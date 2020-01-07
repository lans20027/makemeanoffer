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
import {SendService} from "./sendtask/send.service";
import {MatCardModule} from "@angular/material/card";
import { DisserComponent } from './disser/disser.component';
import {BlockchainInfoService} from "./disser/blockchain-info.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BlockDetailComponent } from './disser/block-detail/block-detail.component';
import { MiniDescriptionComponent } from './page-about/mini-description/mini-description.component';
import {MatProgressSpinnerModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageAboutComponent,
    FooterComponent,
    SendtaskComponent,
    DisserComponent,
    BlockDetailComponent,
    MiniDescriptionComponent
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
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [SendService, BlockchainInfoService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
