"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let LocationService = class LocationService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createLocation(data) {
        const date = new Date();
        const resuft = await this.prisma.vi_tri.create({
            data
        });
        if (resuft) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                'content': 'Tạo vị trí thất bại',
                "dateTime": date
            };
        }
    }
    async getAllLocation() {
        const date = new Date();
        const resuft = await this.prisma.vi_tri.findMany();
        if (resuft.length > 0) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            };
        }
        else
            return {
                "statusCode": 404,
                'content': 'Chưa có vị trí  được tạo',
                "dateTime": date
            };
    }
    async getLocationwithId(id) {
        const date = new Date();
        const resuft = await this.prisma.vi_tri.findMany({
            where: {
                id_vi_tri: +id
            }
        });
        if (resuft.length > 0) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy vị trí',
                "dateTime": date
            };
        }
    }
    async updateLocation(data, id) {
        const date = new Date();
        const checkId = await this.prisma.vi_tri.findFirst({ where: { id_vi_tri: +id } });
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id vị trí',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.vi_tri.update({
                data, where: ({
                    id_vi_tri: +id
                })
            });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': resuft,
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Cập nhật vị trí thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async deleteLocation(id) {
        const date = new Date();
        const checkId = await this.prisma.vi_tri.findFirst({ where: { id_vi_tri: +id } });
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id vị trí',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.vi_tri.delete({ where: { id_vi_tri: +id } });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá vị trí thành công',
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá vị trí thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async postImage(id, duong_dan, ten_vi_tri, tinh_thanh, quoc_gia) {
        const date = new Date();
        const checkIdUser = await this.prisma.vi_tri.findFirst({
            where: {
                id_vi_tri: +id
            }
        });
        if (checkIdUser !== null) {
            await this.prisma.vi_tri.update({
                data: {
                    hinh_anh: duong_dan,
                    ten_vi_tri: ten_vi_tri,
                    quoc_gia: quoc_gia,
                    tinh_thanh: tinh_thanh
                }, where: {
                    id_vi_tri: +id,
                }
            });
            return {
                "statusCode": 200,
                "message": "Tải ảnh vị trí thành công ",
                "content": {
                    hinh_anh: duong_dan,
                },
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                "message": " Id vị trí không tồn tại",
                "dateTime": date
            };
        }
    }
};
LocationService = __decorate([
    (0, common_1.Injectable)()
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map