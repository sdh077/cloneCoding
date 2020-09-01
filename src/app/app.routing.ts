import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuzzniComponent } from './pages/buzzni/buzzni.component';
import { ViewComponent } from './pages/view/view.component';
import { LotteComponent } from './pages/lotte/lotte.component';
import { DegreeComponent } from './pages/degree/degree.component';
import { ChatComponent } from './pages/chat/chat.component';
import { JoeComponent } from './pages/joe/joe.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { NsportsComponent } from './pages/nsports/nsports.component';


const routes: Routes = [
  {
      path: '',
      component: ViewComponent,
  },
  {
    path: 'buzzni', component: BuzzniComponent,
  },
  {
    path: 'lotte', component: LotteComponent,
  },
  {
    path: 'joe', component: JoeComponent,
  },
  {
    path: 'king', component: Page2Component,
  },
  {
    path: 'nsports', component: NsportsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
