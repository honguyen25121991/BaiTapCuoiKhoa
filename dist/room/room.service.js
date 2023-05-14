"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let RoomService = class RoomService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createRoom(data) {
        const date = new Date();
        const idViTri = await this.prisma.vi_tri.findFirst(({
            where: {
                id_vi_tri: data.id_vi_tri
            }
        }));
        if (idViTri !== null) {
            const resuft = await this.prisma.phong.create({
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
                    'content': 'Tạo phòng thất bại',
                    "dateTime": date
                };
            }
        }
        else {
            return {
                "statusCode": 404,
                'content': 'Vị trí này không tồn tại',
                "dateTime": date
            };
        }
    }
    async getAllRoom() {
        const date = new Date();
        const resuft = await this.prisma.phong.findMany();
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
                'content': 'Chưa tạo phòng',
                "dateTime": date
            };
        }
    }
    async getRoomById(id) {
        const date = new Date();
        const resuft = await this.prisma.phong.findMany({ where: { id_phong: +id } });
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
                'content': 'Không tìm thấy phòng',
                "dateTime": date
            };
        }
    }
    async getRoomByLocation(id) {
        const date = new Date();
        const resuft = await this.prisma.phong.findFirst({ where: { id_vi_tri: id } });
        if (resuft !== null) {
            return {
                "statusCode": 200,
                'content': resuft,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy phòng',
                "dateTime": date
            };
        }
    }
    async updateRoomInfo(id, data) {
        const date = new Date();
        const checkId = await this.prisma.phong.findFirst({ where: { id_phong: +id } });
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id bình luận',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.phong.update({
                data, where: ({
                    id_phong: +id
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
                    'content': 'Cập nhật bình luận thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async remove(id) {
        const date = new Date();
        const checkId = await this.prisma.phong.findFirst({ where: { id_phong: +id } });
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id phòng',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.phong.delete({ where: { id_phong: +id } });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá phòng thành công',
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá phòng thất bại',
                    "dateTime": date
                };
            }
        }
    }
};
RoomService = __decorate([
    (0, common_1.Injectable)()
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map