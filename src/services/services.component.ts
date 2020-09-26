import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  templateUrl: './services.component.html',
  styleUrls: [ './services.component.css' ]  
  })
export class ServicesComponent  {
  constructor(private activatedroute:ActivatedRoute)
  {}
}

