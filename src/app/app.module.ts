import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './pages/chat/chat.component';
import { BuzzniComponent } from './pages/buzzni/buzzni.component';
import { AppRoutingModule } from './app.routing';
import { ViewComponent } from './pages/view/view.component';
import { LotteComponent } from './pages/lotte/lotte.component';
import { DegreeComponent } from './pages/degree/degree.component';
import { JoeComponent } from './pages/joe/joe.component';
import { Page2Component } from './pages/page2/page2.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NsportsComponent } from './pages/nsports/nsports.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    ChatComponent,
    BuzzniComponent,
    ViewComponent,
    LotteComponent,
    DegreeComponent,
    JoeComponent,
    Page2Component,
    NsportsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
