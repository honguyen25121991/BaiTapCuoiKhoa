import { RoomService } from './room.service';
import { phong } from '@prisma/client';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    createRoom(body: {
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
    getAllRoom(): Promise<phong[]>;
    getRoomById(id: string): Promise<phong[]>;
    getRoomByLocation(id: string): Promise<phong[]>;
    updateRoomInfo(id: string, body: {
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
    removeRoom(id: string): Promise<{
        statusCode: number;
        content: string;
        dateTime: Date;
    }>;
}
