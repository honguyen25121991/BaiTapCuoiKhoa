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
    async getComment(id) {
        return await this.prisma.binh_luan.findMany({ where: { hinh_id: +id } });
    }
    async postComment(content) {
        try {
            return await this.prisma.binh_luan.create({ data: content });
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map