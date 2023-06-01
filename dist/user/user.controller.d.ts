/// <reference types="multer" />
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, nguoi_dung } from '@prisma/client';
export declare class UserController {
    private userService;
    private config;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(userService: UserService, config: ConfigService);
    createUser(body: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
        hinh_anh: string;
    }, auth: string): Promise<nguoi_dung[]>;
    getAllUser(auth: string): Promise<any>;
    getUserWithId(id: string, auth: string): Promise<any>;
    getUserWithName(name: string, auth: string): Promise<any>;
    updateUser(id: number, body: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
    }): Promise<any>;
    deleteUser(id: string, auth: string): Promise<any>;
    postImage(id: string, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        content: {
            hinh_anh: string;
        };
        dateTime: Date;
    } | {
        statusCode: number;
        message: string;
        dateTime: Date;
        content?: undefined;
    }>;
    getUserSearchPage(auth: string, pageIndex: number, pageSize: number, keyword: string): Promise<any>;
}
