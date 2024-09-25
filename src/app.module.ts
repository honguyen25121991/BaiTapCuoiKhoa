import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { RoomModule } from './room/room.module';
import { LocationModule } from './location/location.module';
import { BookingModule } from './booking/booking.module';
import { KhuyenMaiModule } from './khuyenmai/khuyenmai.module';


@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CommentModule,
    RoomModule,
    LocationModule,
    BookingModule,
    KhuyenMaiModule,
  ],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule { }
