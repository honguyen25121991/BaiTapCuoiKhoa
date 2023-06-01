import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, UseGuards, Req, Headers, Put, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { binh_luan } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

class Comment {
  @ApiProperty({
    description: "ma_cong_viec", type: Number
  })
  ma_cong_viec: number;

  @ApiProperty({
    description: "ma_nguoi_binh_luan", type: Number
  })
  ma_nguoi_binh_luan: number;

  @ApiProperty({
    description: "ngay_binh_luan", type: String
  })
  ngay_binh_luan: string;

  @ApiProperty({
    description: "noi_dung", type: String
  })
  noi_dung: number;

  @ApiProperty({
    description: "sao_binh_luan", type: Number
  })
  sao_binh_luan: number;

  @ApiProperty({
    description: "id_phong", type: Number
  })
  id_phong: number;
}

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }
  @ApiBody({
    type: Comment
  })

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Post('/post-comment/')
  async createComment(
    @Headers('authorization') auth: string,
    @Body() body: {
      ma_cong_viec: number,
      ma_nguoi_binh_luan: number,
      ngay_binh_luan: string,
      noi_dung: string,
      sao_binh_luan: number,
      id_phong: number;
    },
  ): Promise<binh_luan[]> {
    try {
      return await this.commentService.createComment(body)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get()
  async getAllComment(
    @Headers('authorization') auth: string
  ): Promise<binh_luan[]> {
    try {
      return await this.commentService.getAllComment()
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get("/get-comment-with-id/:id")
  async getComment(
    @Param("id") id: string,
    @Headers('authorization') auth: string
  ): Promise<binh_luan[]> {
    try {
      return await this.commentService.getComment(id)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @Get("/get-comment-with-room/:id")
  async getCommentWithRoomId(
    @Param("id") id: number,
    @Headers('authorization') auth: string
  ): Promise<binh_luan[]> {
    try {
      return await this.commentService.getCommentWithRoomId(id)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBody({
    type: Comment
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Put('/update-comment/:id')
  async updateComment(
    @Param("id") id: number,
    @Headers('authorization')
    @Body() body: {
      ma_cong_viec: number,
      ma_nguoi_binh_luan: number,
      ngay_binh_luan: string,
      noi_dung: string,
      sao_binh_luan: number,
      id_phong: number;
    },
  ): Promise<binh_luan[]> {
    const {
      ma_cong_viec,
      ma_nguoi_binh_luan,
      ngay_binh_luan,
      noi_dung,
      sao_binh_luan, id_phong
    } = body
    try {
      return await this.commentService.updateComment({
        ma_cong_viec,
        ma_nguoi_binh_luan,
        ngay_binh_luan,
        noi_dung,
        sao_binh_luan, id_phong
      }, id)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Delete("/delete-comment/:id")

  async deleteComment(
    @Param("id") id: string,
    @Headers('authorization') auth: string
  ): Promise<binh_luan[]> {
    try {
      return await this.commentService.deleteComment(id)
    } catch (error) {
      throw new HttpException("Lỗi BE", 500)
    }
  }

}
