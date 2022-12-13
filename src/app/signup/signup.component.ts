import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignupService} from './signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Signupservice:SignupService, private router:Router) { }

  ngOnInit(): void {

  }
  registerUser(user:any)
  {
    this.Signupservice.registerUser(user).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home']);
      },err=>{
        console.log(err)
      }
    )
    console.log('user created',user);
  }

}
