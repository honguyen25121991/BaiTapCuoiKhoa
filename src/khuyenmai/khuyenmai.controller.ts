import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, ConflictException } from '@nestjs/common';
import { KhuyenMaiService } from './khuyenmai.service';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ResponseService } from '../utils/response/response.service';

class khuyenmai {

    @ApiProperty({
        description: "ma_khuyen_mai", type: String
        
    })
    ma_khuyen_mai: string;
    @ApiProperty({
        description: "ten_san_pham", type: String
        
    })
    ten_san_pham: string;
}

  
@ApiTags('khuyenmai')
@Controller('khuyenmai')
export class KhuyenMaiController {
  constructor(private readonly khuyenMaiService: KhuyenMaiService,
    private readonly responseService: ResponseService,
  ) {}

  @Get()
  async getAllKhuyenMai() {
    const data = await this.khuyenMaiService.getAllKhuyenMai();
    return this.responseService.success(200, 'Success', data);
  }

  @Get(':id')
  async getKhuyenMaiById(@Param('id') id: number) {
    const data = await this.khuyenMaiService.getKhuyenMaiById(+id);
    return this.responseService.success(200, 'Success', data);
  }

  @Post("/create")
  @ApiBody({
    type: khuyenmai
})
  async createKhuyenMai(@Body() body :{ma_khuyen_mai: string , ten_san_pham: string}) {
    const data = await this.khuyenMaiService.createKhuyenMai(body.ma_khuyen_mai, body.ten_san_pham);
    return this.responseService.success(200, 'Success', data);
  }

  @Put(':id')
  @ApiBody({
    type: khuyenmai
})
async updateKhuyenMai(@Param('id') id: number, @Body() body :{ma_khuyen_mai: string , ten_san_pham: string}) {
  try {
    const data = await this.khuyenMaiService.updateKhuyenMai(id, body.ma_khuyen_mai, body.ten_san_pham);
    return this.responseService.success(200, 'Khuyen Mai updated successfully', data);
  } catch (error) {
    if (error instanceof NotFoundException) {
      return this.responseService.error(404, 'Khuyen Mai not found');
    }
    if (error instanceof ConflictException) {
      return this.responseService.error(409, `Khuyen Mai with the same ${body.ma_khuyen_mai} already exists`);
    }
    throw error;
  }
}

  @Delete(':id')
  async deleteKhuyenMai(@Param('id') id: number) {
    try {
      await this.khuyenMaiService.deleteKhuyenMai(id);
      return this.responseService.success(200, 'Khuyen Mai deleted successfully');
    } catch (error) {
      throw new NotFoundException(this.responseService.error(404, 'Khuyen Mai not found', error));
    }
  }
}