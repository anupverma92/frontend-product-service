import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { AuthenticationResponse } from '../products/type/AuthenticationResponse';

type AuthenticationRequest = FormGroup<{
  emailId: FormControl<string | null>;
  password: FormControl<string | null>;
}>;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private constants: AppConstants) {}

  login(loginForm: AuthenticationRequest) : Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.constants.BASE_AUTH_SERVICE_URL}${this.constants.AUTHENTICATE}`, loginForm.value);
  }
  
}
