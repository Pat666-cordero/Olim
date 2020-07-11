import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {
  public loggedIn: boolean;

   
  constructor( 
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService
   ) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
