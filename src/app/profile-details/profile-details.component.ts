import { Component, OnInit } from '@angular/core';
import {ProfileDetailsServiceService} from './profile-details.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private profile:ProfileDetailsServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  accountProfil(account:any)
  {
    this.profile.addAccount(account).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home']);
      },err=>{
        console.log(err)
      }
    )
    console.log('account created',account);
  }
}
