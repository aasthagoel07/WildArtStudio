import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.css' ],  
  })
export class TeamComponent  {
  constructor(private activatedroute:ActivatedRoute)
  {}
}

