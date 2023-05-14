import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { RoomModule } from './room/room.module';


@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CommentModule,
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
