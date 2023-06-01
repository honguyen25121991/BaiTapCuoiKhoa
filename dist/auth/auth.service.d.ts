import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    loginUser(email: string, pass_word: string): Promise<any>;
    createUser(user: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
        hinh_anh: string;
    }): Promise<any>;
}
