import { Body, Controller, Delete, ForbiddenException, Get, Headers, HttpCode, HttpException, HttpStatus, InternalServerErrorException, Param, Post, Put, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, userLogin, } from './dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOkResponse, ApiProduces, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

class User {

    @ApiProperty({
        description: "email", type: String
    })
    email: string;
    @ApiProperty({
        description: "pass_word", type: String
    })
    pass_word: string;
    @ApiProperty({
        description: "name", type: String
    })
    name: string;
    @ApiProperty({
        description: "phone", type: Number
    })
    phone: number;
    @ApiProperty({
        description: "birth_day", type: String
    })
    birth_day: string;
    @ApiProperty({
        description: "gender", type: String
    })
    gender: string;
    @ApiProperty({
        description: "role", type: String
    })
    role: string;
    @ApiProperty({
        description: "hinh_anh", type: String
    })
    hinh_anh: string;
}
@ApiTags("User")
@Controller('user')
export class UserController {
    prisma = new PrismaClient()
    constructor(
        private userService: UserService,
        private config: ConfigService
    ) { }


    @ApiBody({
        type: User
    })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Post("/create")
    async createUser(
        @Body() body: {
            email: string, pass_word: string, name: string, phone: number,
            birth_day: string, gender: string, role: string, hinh_anh: string
        },
        @Headers('authorization') auth: string

    ): Promise<
        nguoi_dung[]
    > {
        try {
            const { email, pass_word, name, phone, birth_day,
                gender, role, hinh_anh } = body
            return await this.userService.createUser({
                email, pass_word, name, phone, birth_day,
                gender, role, hinh_anh
            })
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Get()
    async getAllUser(
        @Headers('authorization') auth: string

    ): Promise<any> {
        try {
            return await this.userService.getAllUser()
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Get("/get-user-with-id/:id")
    async getUserWithId(
        @Param("id") id: string,
        @Headers('authorization') auth: string

    ): Promise<any> {
        try {
            return await this.userService.getUserWithId(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Get("/get-user-with-name/:name")
    async getUserWithName(
        @Param("name") name: string,
        @Headers('authorization') auth: string

    ): Promise<any> {
        try {
            return await this.userService.getUserWithName(name)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBody({
        type: User
    })
    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Put('/update-user/:id')
    async updateUser(
        @Param("id") id: number,
        @Headers('authorization')
        @Body() body: {
            email: string, pass_word: string, name: string, phone: number,
            birth_day: string, gender: string, role: string
        },
    ): Promise<any> {
        const {
            email, pass_word, name, phone, birth_day,
            gender, role
        } = body
        try {
            return await this.userService.updateUser({
                email, pass_word, name, phone, birth_day,
                gender, role
            }, id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Delete("/delete-user/:id")
    async deleteUser(
        @Param("id") id: string,
        @Headers('authorization') auth: string
    ): Promise<any> {
        try {
            return await this.userService.deleteUser(id)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('/upload-image-user/:id')
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
            required: ['fileUpload',],
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
        @Headers('authorization')
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
    ) {
        const duong_dan = `localhost:3000/public/img/${file.filename}`;
        try {
            return this.userService.postImage(
                id,
                duong_dan,
            );
        } catch (error) {
            throw new HttpException('Lỗi BE', 500);
        }
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard("jwt"))
    @Get("/search-user/")
    async getUserSearchPage(
        @Headers('authorization') auth: string,
        @Query('pageIndex') pageIndex: number,
        @Query('pageSize') pageSize: number,
        @Query('keyword') keyword: string,

    ): Promise<any> {
        try {
            return await this.userService.getUserSearchPage(pageIndex, pageSize, keyword)
        } catch (error) {
            throw new HttpException("Lỗi BE", 500)
        }
    }
}


 // @ApiConsumes('mutilpart/from-data')
    // @ApiBody({
    //     description: 'fileload',
    //     // type: any
    // })
    // @UseInterceptors(FileInterceptor('fileUpload', {
    //     storage: diskStorage({
    //         destination: process.cwd() + "/public/img",
    //         filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
    //     })
    // }))

    // @UseGuards(AuthGuard('jwt'))
    // @Get("/get-all-users")
    // getUser(
    //     @Req() req
    // ): Promise<any> {
    //     try {
    //         let tokenDecode = req.user
    //         return this.userService.getUser();
    //     } catch (error) {
    //         throw new HttpException("Lỗi BE",
    //             HttpStatus.INTERNAL_SERVER_ERROR)
    //     }
    // }





    // @UseGuards(AuthGuard('jwt'))
    // @Get("/:id")
    // async getInfoUser(
    //     @Param("id") id: string,
    // ): Promise<any> {
    //     try {
    //         return await this.userService.getInfoUser(id)
    //     } catch (error) {
    //         throw new HttpException("Lỗi BE", 500)
    //     }
    // }

    // @UseGuards(AuthGuard('jwt'))
    // @Put("/update/:id")
    // async updateInfoUser(
    //     @Body() body: any,
    //     @Param("id") id: string
    // ) {
    //     try {
    //         const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = body
    //         return await this.userService.updateInfoUser(
    //             { email, mat_khau, ho_ten, tuoi, anh_dai_dien }, id
    //         )
    //     } catch (error) {
    //         return `Người dùng không tồn tại`
    //     }
    // }
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