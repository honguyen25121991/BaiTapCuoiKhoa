"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createUser(user) {
        let { email, name, phone, birth_day, gender, role, hinh_anh } = user;
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findFirst({ where: { email } });
        if (resuft === null) {
            await this.prisma.nguoi_dung.create({ data: user });
            return {
                "statusCode": 200,
                "message": "Tạo người dùng thành công",
                "content": {
                    email, name, phone, birth_day,
                    gender, role
                },
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email đã tồn tại !",
                "dateTime": date
            };
        }
    }
    async getAllUser() {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany({
            select: {
                id_nguoi_dung: true,
                name: true,
                email: true,
                phone: true,
                birth_day: true,
                hinh_anh: true,
                gender: true,
                role: true,
            },
        });
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
                'content': 'Chưa có bình luận',
                "dateTime": date
            };
    }
    async getUserWithId(id) {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany({
            where: {
                id_nguoi_dung: +id
            },
            select: {
                id_nguoi_dung: true,
                name: true,
                email: true,
                phone: true,
                birth_day: true,
                hinh_anh: true,
                gender: true,
                role: true,
            },
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
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            };
        }
    }
    async getUserWithName(name) {
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findMany({
            where: {
                name: name
            },
            select: {
                id_nguoi_dung: true,
                name: true,
                email: true,
                phone: true,
                birth_day: true,
                hinh_anh: true,
                gender: true,
                role: true,
            },
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
                'content': 'Không tìm thấy tên người dùng',
                "dateTime": date
            };
        }
    }
    async updateUser(data, id) {
        const date = new Date();
        const checkId = await this.prisma.nguoi_dung.findFirst({ where: { id_nguoi_dung: +id } });
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.nguoi_dung.update({
                data, where: ({
                    id_nguoi_dung: +id
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
                    'content': 'Cập nhật người dùng thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async deleteUser(id) {
        const date = new Date();
        const checkId = await this.prisma.nguoi_dung.findFirst({ where: { id_nguoi_dung: +id } });
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id người dùng',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.nguoi_dung.delete({ where: { id_nguoi_dung: +id } });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá người thành công',
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá người thất bại',
                    "dateTime": date
                };
            }
        }
    }
    async postImage(id, duong_dan) {
        const date = new Date();
        const checkIdUser = await this.prisma.nguoi_dung.findFirst({
            where: {
                id_nguoi_dung: +id
            }
        });
        if (checkIdUser !== null) {
            await this.prisma.nguoi_dung.update({
                data: {
                    hinh_anh: duong_dan,
                }, where: {
                    id_nguoi_dung: +id,
                }
            });
            return {
                "statusCode": 200,
                "message": "Tải ảnh người dùng thành công ",
                "content": {
                    hinh_anh: duong_dan,
                },
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                "message": " Id người dùng không tồn tại",
                "dateTime": date
            };
        }
    }
    async getUserSearchPage(pageIndex, pageSize, keyword) {
        const date = new Date();
        const result = await this.prisma.nguoi_dung.findMany({
            skip: (pageIndex - 1) * pageSize,
            take: +pageSize,
            where: {
                name: {
                    contains: keyword
                }
            }
        });
        const totalRow = await this.prisma.nguoi_dung.count({
            where: {
                name: {
                    contains: keyword
                }
            }
        });
        if (result.length > 0) {
            return {
                "statusCode": 200,
                'content': result,
                'totalRow': totalRow,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy kết quả',
                "dateTime": date
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map