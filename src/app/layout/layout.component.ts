import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  outPutName;
  titleName;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(changeName){
    this.titleName = changeName;
  }

  getOutPut(event=""){
    this.outPutName = event;
  }
}
