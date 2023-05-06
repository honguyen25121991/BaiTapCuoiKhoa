import { PrismaClient, nguoi_dung } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    getUser(): Promise<nguoi_dung[]>;
    createUser(user: {
        email: string;
        mat_khau: string;
        ho_ten: string;
        tuoi: number;
        anh_dai_dien: string;
    }): Promise<any>;
    loginUser(email: string, mat_khau: string): Promise<any>;
    getInfoUser(id: string): Promise<any>;
    updateInfoUser(data: {
        email: any;
        mat_khau: any;
        ho_ten: any;
        tuoi: any;
        anh_dai_dien: any;
    }, id: string): Promise<any>;
}
