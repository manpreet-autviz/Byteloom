import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss'],
})
export class LoginAuthComponent {
  userNameOrEmailAddress!: string;
  password!: string;
  validForm: boolean = false;
  ErrorMessage!: string;
  constructor(
    private loginService: LoginService,
    public router: Router,
    public authService: AuthService
  ) {
    if (this.authService.hasToken()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}

  login(): void {
    const credentials = {
      username: this.userNameOrEmailAddress,
      password: this.password,
    };
    if (this.userNameOrEmailAddress && this.password) {
      this.loginService.login(credentials).subscribe(
        (response) => {
          if (response.success === true) {
            localStorage.setItem('accessToken', response.token);

            this.router.navigate(['/home']);
          } else {
            this.ErrorMessage = response.message;
          }
        },
        (error) => {
          this.ErrorMessage = error.error.message;
        }
      );
    }
  }
}
