import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Put } from '@nestjs/common';
import { RoomService } from './room.service';
import { phong } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Room")
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

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

  @Get()
  async getAllRoom(): Promise<phong[]> {
    try {
      return await this.roomService.getAllRoom();
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @Get('/:id')
  async getRoomById(@Param('id') id: string): Promise<phong[]> {
    try {
      return this.roomService.getRoomById(+id);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @Get('/location/:id')
  async getRoomByLocation(@Param('id') id: string): Promise<phong[]> {
    try {
      return this.roomService.getRoomByLocation(+id);
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

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

  @Delete('/delete-room/:id')
  async removeRoom(@Param('id') id: string) {
    try {
      return await this.roomService.remove(+id);

    } catch (error) {

    }
  }
}
