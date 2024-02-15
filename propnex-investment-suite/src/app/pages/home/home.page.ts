import { Component, OnInit } from '@angular/core';
import { fbUser } from '../auth/firebase.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  currUser: fbUser;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
  }

}
