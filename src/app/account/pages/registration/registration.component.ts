import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInfo } from '../../intercept/account-info';
import { AccountService } from '../../serveice/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public datasaved: boolean = false;
  public message: string = "";
  registrationForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private account: AccountService
  ) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
   }

  ngOnInit(): void {
   
  }

    onSubmit() {
      // console.log(this.registrationForm.value);
      if(this.registrationForm.valid){
        this.account.RegisterUser(this.registrationForm.value).subscribe((Response)=>{
          this.datasaved = true;
          this.message = 'Account created successfully!';
        },err=>{
          this.datasaved = false;
          this.message = 'Error in creating account!';
        })
      }else{
        this.message = 'Account created failed!';
      }
    }    
  

  }
