import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public BASE_PRODUCT_SERVICE_URL = environment.product_service_url;
    public BASE_AUTH_SERVICE_URL = environment.auth_service_url;
    public GET_ALL_PRODUCTS = "/getAllProducts";
    public ADD_PRODUCT = "/addProduct";
    public EDIT_PRODUCT = "/editProduct";
    public DELETE_PRODUCT = "/deleteProduct/";
    REGISTER = "/register";
    AUTHENTICATE = "/authenticate";
}

