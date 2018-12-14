import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginFrom;
  token :string;
  content;
  email;
  password;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {

  }

  login() {
    this.loginFrom = { account: this.email, password: this.password, content: this.content }
    this._loginService.login(this.loginFrom).subscribe(x =>{
      localStorage.setItem('token',JSON.stringify(x));
    });

  }

}
