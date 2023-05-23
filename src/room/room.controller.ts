import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Put, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RoomService } from './room.service';
import { phong } from '@prisma/client';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
@ApiTags("Room")
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post('/create-room/')
  async createRoom(@Body() body: {
    "ten_phong": string,
    "khach": number,
    "phong_ngu": number,
    "giuong": number,
    "phong_tam": number,
    "mo_ta": string,
    "gia_tien": number,
    "bep": boolean,
    "may_giat": boolean,
    "ban_la": boolean,
    "tivi": boolean,
    "dieu_hoa": boolean,
    "wifi": boolean,
    "do_xe": boolean,
    "ho_boi": boolean,
    "ban_ui": boolean,
    "hinh_anh": string,
    "id_vi_tri": number
  }): Promise<any> {
    try {
      return this.roomService.createRoom(body);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }
  @ApiConsumes('mutilpart/from-data')
  @ApiBody({
    description: 'fileload',
    // type: any
  })
  @UseInterceptors(FileInterceptor('fileUpload', {
    storage: diskStorage({
      destination: process.cwd() + "/public/img",
      filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
    })

  }))

  @UseGuards(AuthGuard('jwt'))
  @Patch('/update-image/:id') updateImage(
    @Param("id") id: string,
    @UploadedFile() _file: Express.Multer.File,
    @Body() body: {
      ten_hinh: string, mo_ta: string, hinh_id: string
    },
  ) {
    const { ten_hinh, mo_ta, hinh_id } = body
    const duong_dan = `localhost:3000/public/img/${_file.filename}`

    try {
      return this.roomService.updateImage(id, ten_hinh, mo_ta, hinh_id, duong_dan)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get()
  async getAllRoom(): Promise<phong[]> {
    try {
      return await this.roomService.getAllRoom();
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get('/:id')
  async getRoomById(@Param('id') id: string): Promise<phong[]> {
    try {
      return this.roomService.getRoomById(+id);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get('/location/:id')
  async getRoomByLocation(@Param('id') id: string): Promise<phong[]> {
    try {
      return this.roomService.getRoomByLocation(+id);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put('/update-room/:id')
  async updateRoomInfo(@Param('id') id: string, @Body() body: {
    "ten_phong": string,
    "khach": number,
    "phong_ngu": number,
    "giuong": number,
    "phong_tam": number,
    "mo_ta": string,
    "gia_tien": number,
    "bep": boolean,
    "may_giat": boolean,
    "ban_la": boolean,
    "tivi": boolean,
    "dieu_hoa": boolean,
    "wifi": boolean,
    "do_xe": boolean,
    "ho_boi": boolean,
    "ban_ui": boolean,
    "hinh_anh": string,
    "id_vi_tri": number
  }): Promise<any> {
    try {
      return await this.roomService.updateRoomInfo(+id, body);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete('/delete-room/:id')
  async removeRoom(@Param('id') id: string) {
    try {
      return await this.roomService.remove(+id);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }
}
