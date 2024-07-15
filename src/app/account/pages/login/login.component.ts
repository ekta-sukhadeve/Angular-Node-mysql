import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserloginInfo } from '../../intercept/userlogin-info';
import { AccountInfo } from '../../intercept/account-info';
import { AccountService } from '../../serveice/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  public datasaved: boolean = false;
  public message: string = "";

  constructor(
    private fb: FormBuilder,
    private user : AccountService
  ) {
    this.loginForm= fb.group({
      email:['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.maxLength(10)]]
    })
   }

  ngOnInit(): void {
  }
  login(){
    // console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.user.loginUser(this.loginForm.value).subscribe((resp)=>{
        this.datasaved = true;
        this.message = "Login user Successfully"
        this.loginForm.reset()
      },err=>{
        this.datasaved = false;
        this.message = 'Error in creating account!';
      })
    }else{
      this.message = 'Login user failed!';
    }

    
  }

}
