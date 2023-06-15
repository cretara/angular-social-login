import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user!: SocialUser;
  loggedIn: boolean = false;
  private socialAuthServiceSubscription: Subscription = new Subscription();

  constructor(private socialAuthService: SocialAuthService) {}

  ngOnDestroy(): void {
    this.socialAuthServiceSubscription.unsubscribe();
  }

  ngOnInit() {
    this.socialAuthServiceSubscription =
      this.socialAuthService.authState.subscribe((userResponse) => {
        this.user = userResponse;
        this.loggedIn = this.user.authToken != null;
      });
  }
}
