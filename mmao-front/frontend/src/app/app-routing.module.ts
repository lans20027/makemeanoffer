import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageAboutComponent} from './page-about/page-about.component';
import {SendtaskComponent} from './sendtask/sendtask.component';

const routes: Routes = [
  {path: '', component: SendtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
