import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  authService: AuthService;
  constructor(authService1: AuthService) {
      this.authService = authService1;
   }

  ngOnInit() {
  }

}
