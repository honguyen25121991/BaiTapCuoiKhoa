import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  Put,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

class Booking {
  @ApiProperty({
    description: 'ma_phong',
    type: Number,
  })
  ma_phong: number;

  @ApiProperty({
    description: 'ngay_den',
    type: String,
  })
  ngay_den: string;

  @ApiProperty({
    description: 'ngay_di',
    type: String,
  })
  ngay_di: string;

  @ApiProperty({
    description: 'so_luong_khach',
    type: Number,
  })
  so_luong_khach: number;

  @ApiProperty({
    description: 'id_nguoi_dung',
    type: Number,
  })
  id_nguoi_dung: number;

  @ApiProperty({
    description: 'id_phong',
    type: Number,
  })
  id_phong: number;
}

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @ApiBody({
    type: Booking,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/create-booking/')
  async createBooking(
    @Body()
    body: {
      ma_phong: number;
      ngay_den: string;
      ngay_di: string;
      so_luong_khach: number;
      id_nguoi_dung: number;
      id_phong: number;
    },
    @Headers('authorization') auth: string,
  ): Promise<any> {
    try {
      return await this.bookingService.createBooking(body);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllBooking(@Headers('authorization') auth: string): Promise<any> {
    try {
      return await this.bookingService.getAllBooking();
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('/get-booking-with-id/:id')
  async getBookingWithId(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ): Promise<any> {
    try {
      return await this.bookingService.getBookingWithId(id);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('/get-booking-with-user-id/:id')
  async getBookingWithIdUser(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ): Promise<any> {
    try {
      return await this.bookingService.getBookingWithIdUser(id);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBody({
    type: Booking,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('/update-booking/:id')
  async updateComment(
    @Param('id') id: number,
    @Headers('authorization') auth: string,
    @Body()
    body: {
      ma_phong: number;
      ngay_den: string;
      ngay_di: string;
      so_luong_khach: number;
      id_nguoi_dung: number;
      id_phong: number;
    },
  ): Promise<any> {
    const {
      ma_phong,
      ngay_den,
      ngay_di,
      so_luong_khach,
      id_nguoi_dung,
      id_phong,
    } = body;
    try {
      return await this.bookingService.updateBooking(
        {
          ma_phong,
          ngay_den,
          ngay_di,
          so_luong_khach,
          id_nguoi_dung,
          id_phong,
        },
        id,
      );
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete-booking/:id')
  async deleteBooking(
    @Param('id') id: string,
    @Headers('authorization') auth: string,
  ): Promise<any> {
    try {
      return await this.bookingService.deleteBooking(id);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }
}
