import { PrismaClient } from '@prisma/client';
export declare class RoomService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createRoom(data: {
        "ten_phong": string;
        "khach": number;
        "phong_ngu": number;
        "giuong": number;
        "phong_tam": number;
        "mo_ta": string;
        "gia_tien": number;
        "bep": boolean;
        "may_giat": boolean;
        "ban_la": boolean;
        "tivi": boolean;
        "dieu_hoa": boolean;
        "wifi": boolean;
        "do_xe": boolean;
        "ho_boi": boolean;
        "ban_ui": boolean;
        "hinh_anh": string;
        "id_vi_tri": number;
    }): Promise<any>;
    updateImage(id: string, ten_hinh: string, mo_ta: string, hinh_id: string, duong_dan: string): Promise<{
        statusCode: number;
        message: string;
        dateTime: Date;
        content?: undefined;
    } | {
        statusCode: number;
        message: string;
        content: {
            ten_hinh: string;
            duong_dan: string;
            mo_ta: string;
        };
        dateTime: Date;
    }>;
    getAllRoom(): Promise<any>;
    getRoomById(id: number): Promise<any>;
    getRoomByLocation(id: number): Promise<any>;
    updateRoomInfo(id: number, data: {
        "ten_phong": string;
        "khach": number;
        "phong_ngu": number;
        "giuong": number;
        "phong_tam": number;
        "mo_ta": string;
        "gia_tien": number;
        "bep": boolean;
        "may_giat": boolean;
        "ban_la": boolean;
        "tivi": boolean;
        "dieu_hoa": boolean;
        "wifi": boolean;
        "do_xe": boolean;
        "ho_boi": boolean;
        "ban_ui": boolean;
        "hinh_anh": string;
        "id_vi_tri": number;
    }): Promise<any>;
    remove(id: number): Promise<{
        statusCode: number;
        content: string;
        dateTime: Date;
    }>;
}
