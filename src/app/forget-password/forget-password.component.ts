import { Component, OnInit } from '@angular/core';
import {ForgetService} from './forget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private ForgetService:ForgetService, private router:Router) { }

  ngOnInit(): void {
  }
  passwordReset(user:any)
  {
    this.ForgetService.passwordReset(user).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home']);
      },err=>{
        console.log(err)
      }
    )
    console.log('email sent to user',user);
  }

}
