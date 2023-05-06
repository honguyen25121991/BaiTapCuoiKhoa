import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { HandleImagesModule } from './handle-images/handle-images.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    HandleImagesModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
