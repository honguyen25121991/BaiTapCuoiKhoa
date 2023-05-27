import { PrismaClient } from '@prisma/client';
export declare class LocationService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createLocation(data: {
        "ten_vi_tri": string;
        "tinh_thanh": string;
        "quoc_gia": string;
        "hinh_anh": string;
    }): Promise<any>;
    getAllLocation(): Promise<any>;
    getLocationwithId(id: string): Promise<any>;
    updateLocation(data: {
        "ten_vi_tri": string;
        "tinh_thanh": string;
        "quoc_gia": string;
        "hinh_anh": string;
    }, id: number): Promise<any>;
    deleteLocation(id: string): Promise<any>;
    postImage(id: string, duong_dan: string, ten_vi_tri: string, tinh_thanh: string, quoc_gia: string): Promise<{
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
}
