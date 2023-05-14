"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CommentService = class CommentService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createComment(data) {
        const date = new Date();
        const resuft = await this.prisma.binh_luan.create({
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
                'content': 'Đăng comment thất bại',
                "dateTime": date
            };
        }
    }
    async getComment(id) {
        const date = new Date();
        const resuft = await this.prisma.binh_luan.findMany({ where: { id_binh_luan: +id } });
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
                'content': 'Không tìm thấy bình luận',
                "dateTime": date
            };
        }
    }
    async getCommentWithRoomId(id) {
        const date = new Date();
        const resuft = await this.prisma.binh_luan.findMany({
            where: {
                id_phong: +id
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
                'content': 'Không tìm thấy bình luận',
                "dateTime": date
            };
        }
    }
    async getAllComment() {
        const date = new Date();
        const resuft = await this.prisma.binh_luan.findMany();
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
    async updateComment(data, id) {
        const date = new Date();
        const checkId = await this.prisma.binh_luan.findFirst({ where: { id_binh_luan: +id } });
        if (checkId == null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id bình luận',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.binh_luan.update({
                data, where: ({
                    id_binh_luan: +id
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
    async deleteComment(id) {
        const date = new Date();
        const checkId = await this.prisma.binh_luan.findFirst({ where: { id_binh_luan: +id } });
        if (checkId === null) {
            return {
                "statusCode": 404,
                'content': 'Không tìm thấy id bình luận',
                "dateTime": date
            };
        }
        else {
            const resuft = await this.prisma.binh_luan.delete({ where: { id_binh_luan: +id } });
            if (resuft) {
                return {
                    "statusCode": 200,
                    'content': 'Xoá comment thành công',
                    "dateTime": date
                };
            }
            else {
                return {
                    "statusCode": 404,
                    'content': 'Xoá comment thất bại',
                    "dateTime": date
                };
            }
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map