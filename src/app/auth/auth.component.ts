import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode = true;
  login = true;

  error: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe({
      next: () => { this.router.navigate(['products']) },
      error: errorMessage => { this.error = errorMessage }
    })
  }

  handleKeyboardEvent(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit(event)
    }
  }
}
