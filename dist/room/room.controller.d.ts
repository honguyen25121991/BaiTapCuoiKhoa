/// <reference types="multer" />
import { RoomService } from './room.service';
import { phong } from '@prisma/client';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    createRoom(body: {
        ten_phong: string;
        khach: number;
        phong_ngu: number;
        giuong: number;
        phong_tam: number;
        mo_ta: string;
        gia_tien: number;
        bep: boolean;
        may_giat: boolean;
        ban_la: boolean;
        tivi: boolean;
        dieu_hoa: boolean;
        wifi: boolean;
        do_xe: boolean;
        ho_boi: boolean;
        ban_ui: boolean;
        hinh_anh: string;
        id_vi_tri: number;
    }, auth: string): Promise<any>;
    getAllRoom(auth: string): Promise<phong[]>;
    getRoomById(id: number, auth: string): Promise<phong[]>;
    getRoomByLocation(id: string, auth: string): Promise<phong[]>;
    SearchPage(auth: string, pageIndex: number, pageSize: number, keyword: string): Promise<any>;
    updateRoomInfo(id: string, auth: string, body: {
        ten_phong: string;
        khach: number;
        phong_ngu: number;
        giuong: number;
        phong_tam: number;
        mo_ta: string;
        gia_tien: number;
        bep: boolean;
        may_giat: boolean;
        ban_la: boolean;
        tivi: boolean;
        dieu_hoa: boolean;
        wifi: boolean;
        do_xe: boolean;
        ho_boi: boolean;
        ban_ui: boolean;
        hinh_anh: string;
        id_vi_tri: number;
    }): Promise<any>;
    removeRoom(id: string, auth: string): Promise<{
        statusCode: number;
        content: string;
        dateTime: Date;
    }>;
    postImage(id: string, file: Express.Multer.File): Promise<{
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
