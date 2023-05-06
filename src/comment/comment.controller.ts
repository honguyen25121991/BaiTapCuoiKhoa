import { Body, Controller, Get, HttpException, Param, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('comment')
export class CommentController {
    constructor(
        private handleComment: CommentService,
    ) { }
    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    getComment(
        @Param("id") id: string,
    ) {
        try {
            return this.handleComment.getComment(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }
    @UseGuards(AuthGuard('jwt'))
    @Post('/post')
    postComment(
        @Body() body: any
    ) {
        const { nguoi_dung_id, hinh_id, noi_dung } = body
        try {
            return this.handleComment.postComment({ nguoi_dung_id, hinh_id, noi_dung })
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }
}
