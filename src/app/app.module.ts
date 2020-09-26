import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from '../home/home.component';
import {TeamComponent} from '../team/team.component';
import {ProjectComponent} from '../project/project.component';
import {WorkComponent} from '../work/work.component';
import { ServicesComponent } from '../services/services.component';
import { AppComponent } from './app.component';
//import {} from './app-'


import { routing } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [ AppComponent, HomeComponent, TeamComponent, WorkComponent, ServicesComponent, ProjectComponent],
  imports:      [ BrowserModule, routing, NgbModule ],
  
  bootstrap:    [ AppComponent ]
})  
export class AppModule { }
