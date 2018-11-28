import { Component, OnInit } from '@angular/core';
import { RealwordService } from 'src/app/services/realword.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  data;
  constructor(private getcontent: RealwordService) { }

  ngOnInit() {
    this.getcontent.getcontent().subscribe(value => {this.data = value;console.log(value)});
    console.log(this.data);
  }

}
