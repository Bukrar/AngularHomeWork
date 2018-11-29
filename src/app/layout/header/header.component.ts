import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  @Input()
  public set headTitleName(v: string) {
    if (v)
    {
      this._headTitleName = v;
      this.changeTitle.emit(this._headTitleName + "BBB");
    }
  }
  _headTitleName = 'orgin';

  @Output() changeTitle = new EventEmitter();



}
