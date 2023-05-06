import { UserService } from './user.service';
import { userLogin } from './Dto/user.dto';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
export declare class UserController {
    private userService;
    private config;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(userService: UserService, config: ConfigService);
    getUser(req: any): Promise<any>;
    createUser(body: {
        email: string;
        mat_khau: string;
        ho_ten: string;
        tuoi: number;
        anh_dai_dien: string;
    }): Promise<any>;
    loginUser(body: userLogin): Promise<any>;
    getInfoUser(id: string): Promise<any>;
    updateInfoUser(body: any, id: string): Promise<any>;
    putUser(): string;
    removeUser(): string;
}
