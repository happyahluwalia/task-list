import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  authService : AuthService;
  constructor(private authService1: AuthService,
              private slimLoading: SlimLoadingBarService){
        this.authService = authService1;
     }
}
