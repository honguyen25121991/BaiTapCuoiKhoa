import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { KhuyenMaiService } from './khuyenmai.service';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
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
  constructor(private readonly khuyenMaiService: KhuyenMaiService) {}

  @Get()
  async getAllKhuyenMai() {
    return this.khuyenMaiService.getAllKhuyenMai();
  }

  @Get(':id')
  async getKhuyenMaiById(@Param('id') id: number) {
    return this.khuyenMaiService.getKhuyenMaiById(+id);
  }

  @Post("/create")
  @ApiBody({
    type: khuyenmai
})
  async createKhuyenMai(@Body() body :{ma_khuyen_mai: string , ten_san_pham: string}) {
    const {ma_khuyen_mai, ten_san_pham} = body;
    return this.khuyenMaiService.createKhuyenMai(ma_khuyen_mai,ten_san_pham);
  }

  @Put(':id')
  @ApiBody({
    type: khuyenmai
})
  async updateKhuyenMai(@Param('id') id: number, @Body()body: {ma_khuyen_mai: string, ten_san_pham: string}) {
    const {ma_khuyen_mai, ten_san_pham} = body;
    return this.khuyenMaiService.updateKhuyenMai(+id, ma_khuyen_mai,ten_san_pham);
  }

  @Delete(':id')
  async deleteKhuyenMai(@Param('id') id: number) {
    return this.khuyenMaiService.deleteKhuyenMai(+id);
  }
}