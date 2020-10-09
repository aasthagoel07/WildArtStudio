import { Component, VERSION } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ProjectComponent } from 'src/project/project.component';


@Component({
  templateUrl: './work.component.html',
  styleUrls: [ './work.component.css' ]  
  })
export class WorkComponent  {
  constructor(public dialog: MatDialog,
    private activatedroute:ActivatedRoute)
  {}
  openDialog(){
    console.log("Dialog");
    const dialogRef = this.dialog.open(ProjectComponent);
  }
}

