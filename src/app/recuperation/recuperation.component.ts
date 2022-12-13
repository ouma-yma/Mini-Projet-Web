import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RecuperationService} from './recuperation.service';

@Component({
  selector: 'app-recuperation',
  templateUrl: './recuperation.component.html',
  styleUrls: ['./recuperation.component.css']
})
export class RecuperationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  userId=""
  token=""
  constructor(private fb: FormBuilder, private router: Router,private recup:RecuperationService , private rt : ActivatedRoute) {
    this.rt.params.subscribe((data)=>{
        this.userId=data['userId'];
        this.token=data['token'];
    })
    let formControls = {
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      
      //rePassword: new FormControl('', [Validators.required])
    }
    this.registerForm = this.fb.group(formControls);
  }

  get password() {return this.registerForm.get('password');}
  //get rePassword() {return this.registerForm.get('rePassword');}

  ngOnInit(): void {

  }

  recuperation(val:any)
  {
    console.log('ez')
    let data = {
      password : val.password ,
      token : this.token ,
      userId  : this.userId
    }
    this.recup.addAccount(data).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/home']);
      },err=>{
        console.log(err)
      }
    )
    console.log('password created',val.password);
  }
}
