import { Injectable } from '@nestjs/common';
import { PrismaClient, } from '@prisma/client'
import { userLogin } from './Dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
    constructor(
        private jwtService: JwtService,
        private config: ConfigService,
    ) { }

    prisma = new PrismaClient()

    async createUser(user: {
        email: string, pass_word: string, name: string, phone: number,
        birth_day: string, gender: string, role: string
    }): Promise<any> {
        let {
            email, name, phone, birth_day,
            gender, role
        } = user
        const date = new Date();

        const resuft = await this.prisma.nguoi_dung.findFirst({ where: { email } })
        if (resuft === null) {
            await this.prisma.nguoi_dung.create({ data: user })
            return {
                "statusCode": 200,
                "message": "Tạo người dùng thành công",
                "content": {
                    email, name, phone, birth_day,
                    gender, role
                },
                "dateTime": date
            }
        } else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email đã tồn tại !",
                "dateTime": date
            }
        }
    }
    async getAllUser(): Promise<any> {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany()
        if (resuft.length > 0) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            }
        } else
            return {
                "statusCode": 404,
                'content': 'Chưa có bình luận',
                "dateTime": date
            }
    }
    async getUserWithId(id: string): Promise<any> {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany({
            where: {
                id_nguoi_dung: + id
            }
        })
        if (resuft.length > 0) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            }
        } else {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            }
        }
    }

    async getUserWithName(name: string): Promise<any> {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany({
            where: {
                name: name
            }
        })
        if (resuft.length > 0) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            }
        } else {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy tên người dùng',
                "dateTime": date
            }
        }
    }

    async updateUser(
        data: {
            email: string, pass_word: string, name: string, phone: number,
            birth_day: string, gender: string, role: string
        }, id: number
    ): Promise<any> {
        const date = new Date();
        const checkId = await this.prisma.nguoi_dung.findFirst({ where: { id_nguoi_dung: +id } })
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            }
        } else {
            const resuft = await this.prisma.nguoi_dung.update({
                data, where: ({
                    id_nguoi_dung: +id
                })
            })
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': resuft,
                    "dateTime": date
                }
            } else {
                return {
                    "statusCode": 404,
                    'content': 'Cập nhật người dùng thất bại',
                    "dateTime": date
                }
            }
        }

    }

    async deleteUser(id: string): Promise<any> {
        const date = new Date();
        const checkId = await this.prisma.nguoi_dung.findFirst({ where: { id_nguoi_dung: +id } })
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            }
        } else {
            const resuft = await this.prisma.nguoi_dung.delete({ where: { id_nguoi_dung: +id } })
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá người thành công',
                    "dateTime": date
                }
            } else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá người thất bại',
                    "dateTime": date
                }
            }
        }
    }
}


   // async loginUser(
    //     email: string,
    //     pass_word: string
    // ): Promise<any> {
    //     const user: userLogin = await this.prisma.nguoi_dung.findFirst({ where: { email, pass_word } });
    //     if (user !== null) {
    //         let token = this.jwtService.sign({ data: 'nodejs 29' },
    //             { secret: this.config.get("SECRET_KEY"), expiresIn: "60m" }
    //         )
    //         return { "token": token, "Message": "Login thanh cong" }

    //     } else {
    //         return `Sai tk hoac mat khau`
    //     }
    // }

    // async createUser(user: {
    //     email: string, pass_word: string, name: string, phone: number,
    //     birth_day: string, gender: string, role: string

    // }): Promise<any> {
    //     await this.prisma.nguoi_dung.create({ data: user })
    //     return `Tạo người dùng thành công`
    // }




    // async getInfoUser(id: string): Promise<any> {
    //     return await this.prisma.nguoi_dung.findFirst({ where: { nguoi_dung_id: +id } })
    // }

    // async updateInfoUser(data: {
    //     email: any, mat_khau: any, ho_ten: any, tuoi: any, anh_dai_dien: any
    // }, id: string): Promise<any> {
    //     const check = await this.prisma.nguoi_dung.update({
    //         data, where: {
    //             nguoi_dung_id: +id
    //         }
    //     })
    //     if (check !== null) {
    //         return {
    //             check, "Message": 'Update success'
    //         }
    //     } else {
    //         return `Update Fail`
    //     }
    // }

    // async saveAva(userId: string, imageName: string,) {
    //     let data = await this.prisma.nguoi_dung.findFirst({
    //         where: { id: +userId }
    //     })
    //     data.anh_dai_dien = imageName
    //     await this.prisma.nguoi_dung.update({
    //         data, where: {
    //             id:
    //                 +nguoi_dung_id

    //         }
    //     })
    //     // return imageName
    //     return "upload thanh cong";
    // }