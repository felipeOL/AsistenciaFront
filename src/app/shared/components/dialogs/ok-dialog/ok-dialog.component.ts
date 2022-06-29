import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogDataModel} from "../../../../Models/dialogData.model";

@Component({
  selector: 'app-ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.scss']
})
export class OkDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) { }

  ngOnInit(): void {
  }

}
