import { Injectable } from "@nestjs/common";

// Responsible for the business logic (without connecting database)

@Injectable({})
export class AuthService {
   signup() {
      return { msg: 'I have signed up' };
   }

   signin() { 
      return { msg: 'I have sign in' };
   }
}