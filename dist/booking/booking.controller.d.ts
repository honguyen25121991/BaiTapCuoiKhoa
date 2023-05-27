import { BookingService } from './booking.service';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    createBooking(body: {
        ma_phong: number;
        ngay_den: string;
        ngay_di: string;
        so_luong_khach: number;
        id_nguoi_dung: number;
        id_phong: number;
    }, auth: string): Promise<any>;
    getAllBooking(auth: string): Promise<any>;
    getBookingWithId(id: string, auth: string): Promise<any>;
    getBookingWithIdUser(id: string, auth: string): Promise<any>;
    updateComment(id: number, auth: string, body: {
        ma_phong: number;
        ngay_den: string;
        ngay_di: string;
        so_luong_khach: number;
        id_nguoi_dung: number;
        id_phong: number;
    }): Promise<any>;
    deleteBooking(id: string, auth: string): Promise<any>;
}
