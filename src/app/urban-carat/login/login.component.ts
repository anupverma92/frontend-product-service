import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    'emailId': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
});
    
  submitted = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router,
    private tokenService: TokenService) {}
  
  onSubmit() { 
      this.submitted = true;
      this.loginService.login(this.loginForm).subscribe(
        {
          next: (res) => {
            this.tokenService.token = res.token as string;
            this.router.navigate(['products']);
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          }
        });
  }

}
