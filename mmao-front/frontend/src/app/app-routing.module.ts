import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageAboutComponent} from './page-about/page-about.component';
import {SendtaskComponent} from './sendtask/sendtask.component';
import {DisserComponent} from './disser/disser.component';

const routes: Routes = [
  {path: '', component: SendtaskComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'dissertation', component: DisserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
