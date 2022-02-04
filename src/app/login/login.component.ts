import { Component, OnInit } from '@angular/core';
import { LoginService } from '../provider/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    const response = await this.loginService.login({ username: this.username, password: this.password }).toPromise();
  }

}
