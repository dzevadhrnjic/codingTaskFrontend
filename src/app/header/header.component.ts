import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showHeader: boolean = true;

  isAuthenticated = false;
  private userSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onClickCreateProduct() {
    this.router.navigate(['newProduct'], { relativeTo: this.route })
  }

  onClickCreateCategory() {
    this.router.navigate(['newCategory'], { relativeTo: this.route })
  }

  onClickLogout() {
    this.authService.logout()
  }

  onClickGetClosestProducts() {
    this.router.navigate(['closestProducts'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe;
  }
}
