import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from 'config';
 
import{MongooseModule} from '@nestjs/mongoose';

console.log(config.get('mongodbUrl'));


@Module({
  imports: [
    MongooseModule.forRoot(config.get('mongodbUrl'))
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}