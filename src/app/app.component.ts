import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {

    if(this.authService.user != null){
    this.authService.autoLogin();
    }else{
      this.router.navigate(['/auth'])
    }
  }
  title = 'codingTaskFrontend';
}
