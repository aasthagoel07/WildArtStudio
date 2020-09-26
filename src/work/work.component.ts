import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.css' ]  
  })
export class WorkComponent  {
  constructor(private activatedroute:ActivatedRoute)
  {}
}

