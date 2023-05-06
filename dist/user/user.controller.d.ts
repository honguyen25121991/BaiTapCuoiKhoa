import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
export declare class UserController {
    private userService;
    private config;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(userService: UserService, config: ConfigService);
    putUser(): string;
    removeUser(): string;
}
