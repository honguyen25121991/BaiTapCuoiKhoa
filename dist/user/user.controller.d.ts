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
}
