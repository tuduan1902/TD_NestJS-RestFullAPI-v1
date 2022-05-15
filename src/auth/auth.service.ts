import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

// Responsible for the business logic (without connecting database)

@Injectable()
export class AuthService {
   constructor(private  prisma: PrismaService) {}
   signup() {
      return { msg: 'I have signed up' };
   }

   signin() { 
      return { msg: 'I have sign in' };
   }
}