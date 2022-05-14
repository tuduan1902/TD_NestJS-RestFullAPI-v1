import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


// Write logic connect database
@Injectable()
export class PrismaService extends PrismaClient {
   constructor() {
      super({
         datasources: {
            db: {
               url: 'postgresql://postgres:tptd1234560@localhost:5433/nest?schema=public'
            }
         }
      })
   }
}
