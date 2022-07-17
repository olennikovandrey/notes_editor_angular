import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { registeredUsers } from 'src/app/data/users-data/usersData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {};

  submitLogin() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(["main"]),
      error: (err) => alert(err.message)
    });
  };

  register() {
    registeredUsers.push(this.loginForm.value);
    localStorage.setItem("UsersData", JSON.stringify(registeredUsers));
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(["main"])
    });
  };

  ngOnInit(): void {
    if (localStorage.getItem("UsersData") === null) {
      localStorage.setItem("UsersData", JSON.stringify(registeredUsers));
    };

    this.loginForm = new FormGroup ({
      "login": new FormControl("", [Validators.required, Validators.minLength(2)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)])
    });

    if (this.authService.isLoggedIn()) {
      this.router.navigate(["main"]);
    };
  };
};
