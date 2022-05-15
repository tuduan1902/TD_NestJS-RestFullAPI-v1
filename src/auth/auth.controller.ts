import { Body, Controller, Post, Req, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

//Responsible for handling requests

@Controller('auth')
export class AuthController{
   constructor(private authService: AuthService) {}
   // [POST] /auth/signup
   @Post('signup')
   signup(@Body() dto: AuthDto) {
      console.log({
         dto,
      })
      return this.authService.signup()
   }

   // [POST] /auth/signin   
   @Post('signin')
   signin() {
      return this.authService.signin()
   }
}