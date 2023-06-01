import { PrismaClient } from '@prisma/client';
export declare class UserService {
    constructor();
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
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
    getAllUser(): Promise<any>;
    getUserWithId(id: string): Promise<any>;
    getUserWithName(name: string): Promise<any>;
    updateUser(data: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
    }, id: number): Promise<any>;
    deleteUser(id: string): Promise<any>;
    postImage(id: string, duong_dan: string): Promise<{
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
    getUserSearchPage(pageIndex: number, pageSize: number, keyword: string): Promise<any>;
}
