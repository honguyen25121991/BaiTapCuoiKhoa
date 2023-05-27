/// <reference types="multer" />
import { LocationService } from './location.service';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    createLocation(auth: string, body: {
        "ten_vi_tri": string;
        "tinh_thanh": string;
        "quoc_gia": string;
        "hinh_anh": string;
    }): Promise<any>;
    getAllLocation(auth: string): Promise<any>;
    getLocationwithId(auth: string, id: string): Promise<any>;
    updateLocation(auth: string, id: number, body: {
        "ten_vi_tri": string;
        "tinh_thanh": string;
        "quoc_gia": string;
        "hinh_anh": string;
    }): Promise<any>;
    deleteLocation(auth: string, id: string): Promise<any>;
    postImage(id: string, _file: Express.Multer.File, body: {
        "ten_vi_tri": string;
        "tinh_thanh": string;
        "quoc_gia": string;
        "hinh_anh": string;
    }): Promise<{
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
