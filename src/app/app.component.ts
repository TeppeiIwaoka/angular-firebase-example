import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.authServicce.afUser$;
  constructor(
    private authServicce: AuthService
  ) { }
  title = 'dog-hunting-2-iwaoka';

  logout() {
    this.authServicce.logout();
  }
}
