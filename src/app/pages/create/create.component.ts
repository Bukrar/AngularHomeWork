import { Component, OnInit } from '@angular/core';
import { RealwordService } from 'src/app/services/realword.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private create: RealwordService) { }

  ngOnInit() {

  }

}
