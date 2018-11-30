import { Component, OnInit } from '@angular/core';
import { RealwordService } from 'src/app/services/realword.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private create: RealwordService,
    private fb: FormBuilder) { }
    get title() { return this.articleForm.get('title'); }
  articleForm: FormGroup
  ngOnInit() {
    // this.articleForm = this.fb.group({
    //   title: new FormControl(),
    //   tag: '',
    //   content: ''
    // })
    this.articleForm = this.fb.group({});

    // 1
    //this.articleForm.addControl('title', new FormControl('', [Validators.required, Validators.maxLength(10)]));

    this.articleForm.addControl('title', new FormControl('', Validators.required));
    this.articleForm.addControl('content', new FormControl('', Validators.required));
    this.articleForm.addControl('tag', new FormControl('', Validators.required));
    // 2
    // const title = new FormControl();
    // title.setValidators(Validators.required);
    // this.articleForm.addControl('title',title);

  }



  createButton(body) {
    this.create.createArticle(body);
  }
}
