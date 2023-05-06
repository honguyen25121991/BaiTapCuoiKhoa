import { Body, Controller, Delete, ForbiddenException, Get, HttpCode, HttpException, HttpStatus, InternalServerErrorException, Param, Post, Put, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, userLogin, } from './Dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('user')
export class UserController {
    prisma = new PrismaClient()

    constructor(
        private userService: UserService,
        private config: ConfigService
    ) { }
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
    @Get("/get-all-users")
    getUser(
        @Req() req
    ): Promise<any> {
        try {
            let tokenDecode = req.user
            return this.userService.getUser();
        } catch (error) {
            throw new HttpException("Lỗi BE",
                HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    @Post("/create-user/")
    async createUser(
        @Body() body: {
            email: string, mat_khau: string, ho_ten: string, tuoi: number, anh_dai_dien: string
        },
    ): Promise<any> {
        try {
            const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = body
            return await this.userService.createUser({ email, mat_khau, ho_ten, tuoi, anh_dai_dien })
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @Post("/login-user/")
    async loginUser(
        @Body() body: userLogin,
    ): Promise<any> {
        try {
            const { email, mat_khau } = body
            return await this.userService.loginUser(email, mat_khau)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get("/:id")
    async getInfoUser(
        @Param("id") id: string,
    ): Promise<any> {
        try {
            return await this.userService.getInfoUser(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Put("/update/:id")
    async updateInfoUser(
        @Body() body: any,
        @Param("id") id: string
    ) {
        try {
            const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = body
            return await this.userService.updateInfoUser(
                { email, mat_khau, ho_ten, tuoi, anh_dai_dien }, id
            )
        } catch (error) {
            return `Người dùng không tồn tại`
        }
    }
    // @Post("/upload-avatar/:user_id")
    // uploadAva(
    //     @Param("user_id") userId: string,
    //     @UploadedFile() file: Express.Multer.File) {
    //     // return file
    //     try {
    //         return this.userService.saveAva(userId, file.filename)
    //     } catch (error) {
    //         throw new HttpException("Lỗi BE", 500)
    //     }
    // }
    @Put()
    putUser() {
        return "put User"
    }
    @Delete()
    removeUser() {
        return "remove User"
    }
}
