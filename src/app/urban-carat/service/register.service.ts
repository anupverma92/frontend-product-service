import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';

type RegistrationRequest = FormGroup<{
  fullName: FormControl<string | null>;
  emailId: FormControl<string | null>;
  userId: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}>;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient, private constants: AppConstants) {}
  
  register(registerForm: RegistrationRequest) {
    return this.http.post(`${this.constants.BASE_AUTH_SERVICE_URL}${this.constants.REGISTER}`, registerForm.value);
  }
 }
