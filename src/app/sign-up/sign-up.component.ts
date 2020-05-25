import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  selectForm: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  changeLoginForm(): void {
    this.selectForm = true;
  }
  changeSignupForm(): void {
    this.selectForm = false;
  }
  signup(signupForm): void {
    this.authService.signUp(signupForm.value.email, signupForm.value.password);
  }

}
