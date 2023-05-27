"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let BookingService = class BookingService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createBooking(data) {
        const date = new Date();
        const resuft = await this.prisma.dat_phong.create({
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
                'content': 'Đặt phòng thất bại',
                "dateTime": date
            };
        }
    }
    async getAllBooking() {
        const date = new Date();
        const resuft = await this.prisma.dat_phong.findMany();
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
                'content': 'Chưa có booking',
                "dateTime": date
            };
    }
    async getBookingWithId(id) {
        const date = new Date();
        const resuft = await this.prisma.dat_phong.findMany({ where: { id_dat_phong: +id } });
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
                'content': 'Không tìm thấy phòng đã đặt',
                "dateTime": date
            };
        }
    }
    async getBookingWithIdUser(id) {
        const date = new Date();
        const resuft = await this.prisma.dat_phong.findMany({
            where: {
                id_nguoi_dung: +id
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
                'content': 'Không tìm thấy phòng đã đặt với mã người dùng bạn cung cấp',
                "dateTime": date
            };
        }
    }
    async updateBooking(data, id) {
        const date = new Date();
        const checkId = await this.prisma.dat_phong.findFirst({ where: { id_dat_phong: +id } });
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id đặt phòng',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.dat_phong.update({
                data, where: ({
                    id_dat_phong: +id
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
                    'content': 'Cập nhật đặt phòng thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async deleteBooking(id) {
        const date = new Date();
        const checkId = await this.prisma.dat_phong.findFirst({ where: { id_dat_phong: +id } });
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id đặt phòng',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.dat_phong.delete({ where: { id_dat_phong: +id } });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá đặt phòng thành công',
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá đặt phòng thất bại',
                    "dateTime": date
                };
            }
        }
    }
};
BookingService = __decorate([
    (0, common_1.Injectable)()
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map