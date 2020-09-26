import { Component, VERSION } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  })
export class HomeComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private router:Router)
  {}
  showDetails()
  {
    //this.router.navigateByUrl('hello');
  }

}