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
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { LocationService } from './location.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiProduces,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
class Location {
  @ApiProperty({
    description: 'ten_vi_tri',
    type: String,
  })
  ten_vi_tri: string;

  @ApiProperty({
    description: 'tinh_thanh',
    type: String,
  })
  tinh_thanh: string;

  @ApiProperty({
    description: 'quoc_gia',
    type: String,
  })
  quoc_gia: string;

  @ApiProperty({
    description: 'hinh_anh',
    type: String,
  })
  hinh_anh: string;

  id_vi_tri: number;
}

@ApiTags('Location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  @ApiBody({
    type: Location,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/create-location/')
  async createLocation(
    @Headers('authorization') auth: string,
    @Body()
    body: {
      ten_vi_tri: string;
      tinh_thanh: string;
      quoc_gia: string;
      hinh_anh: string;
    },
  ): Promise<any> {
    try {
      return this.locationService.createLocation(body);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllLocation(@Headers('authorization') auth: string): Promise<any> {
    try {
      return await this.locationService.getAllLocation();
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(`/get-location-with-id/:id`)
  async getLocationwithId(
    @Headers('authorization') auth: string,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      return await this.locationService.getLocationwithId(id);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBody({
    type: Location,
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('/update-location/:id')
  async updateLocation(
    @Headers('authorization') auth: string,
    @Param('id') id: number,
    @Body()
    body: {
      ten_vi_tri: string;
      tinh_thanh: string;
      quoc_gia: string;
      hinh_anh: string;
    },
  ): Promise<any> {
    const { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = body;
    try {
      return await this.locationService.updateLocation(
        {
          ten_vi_tri,
          tinh_thanh,
          quoc_gia,
          hinh_anh,
        },
        id,
      );
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete-location/:id')
  async deleteLocation(
    @Headers('authorization') auth: string,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      return await this.locationService.deleteLocation(id);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/upload-image-location/:id')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fileUpload: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['fileUpload'],
    },
  })
  @ApiProduces('application/json')
  @ApiOkResponse()
  @UseInterceptors(
    FileInterceptor('fileUpload', {
      storage: diskStorage({
        destination: process.cwd() + '/public/img',
        filename: (req, file, callback) =>
          callback(null, Date.now() + '_' + file.originalname),
      }),
    }),
  )
  postImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Headers('authorization') auth: string,
  ) {
    const duong_dan = `localhost:3000/public/img/${file.filename}`;
    try {
      return this.locationService.postImage(id, duong_dan);
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('/search-location/')
  async getUserSearchPage(
    @Headers('authorization') auth: string,
    @Query('pageIndex') pageIndex: number,
    @Query('pageSize') pageSize: number,
    @Query('keyword') keyword: string,
  ): Promise<any> {
    try {
      return await this.locationService.getLocationSearchPage(
        pageIndex,
        pageSize,
        keyword,
      );
    } catch (error) {
      throw new HttpException('Lỗi BE', 500);
    }
  }
}
