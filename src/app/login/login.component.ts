import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$ = this.authService.user$;

  selectForm: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  changeLoginForm(): void {
    this.selectForm = true;
  }
  changeSignupForm(): void {
    this.selectForm = false;
  }
  login(loginForm: NgForm): void {
    this.authService.login(loginForm.value.email, loginForm.value.password);
  }

}

