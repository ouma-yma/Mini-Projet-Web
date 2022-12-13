import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  LoginUser(user:any)
  {
    this.loginservice.LoginUser(user).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home']);
      },err=>{
        console.log(err)
      }
    )
  }
}
