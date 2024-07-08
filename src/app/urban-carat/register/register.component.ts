import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm = this.fb.group({
  'fullName': new FormControl('', Validators.required),
  'emailId': new FormControl('', Validators.required),
  'userId': new FormControl('', Validators.required),
  'password': new FormControl('', Validators.required),
  'confirmPassword': new FormControl('', Validators.required)
});

  submitted: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  onSubmit() { 
    this.submitted = true;
    this.registerService.register(this.registerForm).subscribe(res => console.log(res));
    this.router.navigate(['login']);
  }

}
