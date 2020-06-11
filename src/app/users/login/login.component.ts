import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { UtilServiceService } from 'src/app/_services/util-service.service';
import { Router } from '@angular/router';
declare const $: any;
export var users = []
export class SignModel {
  email: string;
  password: string;
  repassword: string;
  error: string[] = [];
  showLogin: boolean = true;
  loader: boolean = false;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('.5s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('.5s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {
  model: SignModel;
  constructor(private utilService: UtilServiceService, private router: Router) {
    this.model = new SignModel();
  }
  ngOnInit(): void {

  }
  switchPage() {
    //clear model and change form
    this.clearModel();
    this.model.showLogin = !this.model.showLogin;
  }
  async login() {
    if (!this.checkRequird())
      return
    //api simolate
    try {
      this.model.loader = true;
      await this.utilService.sleep(1);
      let user = users.find(x => x.pass = this.model.password && x.email == this.model.email);
      if (user)
        this.router.navigate(['/']);
      else
        throw 'Invalid email and password'
    } catch (e) {
      this.model.error.push(e);
    } finally {
      this.model.loader = false;
    }
  }
  async register() {
    if (!this.checkRequird())
      return
    //api simolate
    try {
      this.model.loader = true;
      await this.utilService.sleep(1);
      if (users.find(x => x.email == this.model.email)) {
        throw 'Duplicate email'
      }
      users.push({ email: this.model.email, pass: this.model.password });
      this.model.showLogin = true;
    } catch (e) {
      this.model.error.push(e);
    } finally {
      this.model.loader = false;
    }
  }
  checkRequird() {
    this.model.error = [];
    let valid = true;
    if (!this.model.email) {
      this.model.error.push('Please insert email');
      valid = false;
    }
    if (!this.model.password) {
      this.model.error.push('Please insert password');
      valid = false;
    }
    if (this.model.email && !this.utilService.checkEmail(this.model.email)) {
      this.model.error.push('Email is not valid');
      valid = false;
    }
    if (!this.model.showLogin) {
      if (!this.model.repassword) {
        this.model.error.push('Please insert confirm password');
        valid = false;
      }
      if (this.model.password != this.model.repassword) {
        this.model.error.push('Password and confirm password is not match');
        valid = false;
      }
    }
    return valid;
  }
  clearModel() {
    this.model.error = [];
    this.model.password = '';
    this.model.repassword = '';
    this.model.email = '';
    this.model.loader = false;
  }
}
