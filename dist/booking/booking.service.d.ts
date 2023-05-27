import { PrismaClient } from '@prisma/client';
export declare class BookingService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createBooking(data: {
        ma_phong: number;
        ngay_den: string;
        ngay_di: string;
        so_luong_khach: number;
        id_nguoi_dung: number;
        id_phong: number;
    }): Promise<any>;
    getAllBooking(): Promise<any>;
    getBookingWithId(id: string): Promise<any>;
    getBookingWithIdUser(id: string): Promise<any>;
    updateBooking(data: {
        ma_phong: number;
        ngay_den: string;
        ngay_di: string;
        so_luong_khach: number;
        id_nguoi_dung: number;
        id_phong: number;
    }, id: number): Promise<any>;
    deleteBooking(id: string): Promise<any>;
}
