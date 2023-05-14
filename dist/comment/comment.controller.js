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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
class Comment {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ma_cong_viec", type: Number
    }),
    __metadata("design:type", Number)
], Comment.prototype, "ma_cong_viec", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ma_nguoi_binh_luan", type: Number
    }),
    __metadata("design:type", Number)
], Comment.prototype, "ma_nguoi_binh_luan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ngay_binh_luan", type: String
    }),
    __metadata("design:type", String)
], Comment.prototype, "ngay_binh_luan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "noi_dung", type: String
    }),
    __metadata("design:type", Number)
], Comment.prototype, "noi_dung", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "sao_binh_luan", type: Number
    }),
    __metadata("design:type", Number)
], Comment.prototype, "sao_binh_luan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "id_phong", type: Number
    }),
    __metadata("design:type", Number)
], Comment.prototype, "id_phong", void 0);
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createComment(auth, body) {
        try {
            return await this.commentService.createComment(body);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getAllComment(auth) {
        try {
            return await this.commentService.getAllComment();
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getComment(id, auth) {
        try {
            return await this.commentService.getComment(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getCommentWithRoomId(id, auth) {
        try {
            return await this.commentService.getCommentWithRoomId(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async updateComment(id, body) {
        const { ma_cong_viec, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan, id_phong } = body;
        try {
            return await this.commentService.updateComment({
                ma_cong_viec,
                ma_nguoi_binh_luan,
                ngay_binh_luan,
                noi_dung,
                sao_binh_luan, id_phong
            }, id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async deleteComment(id, auth) {
        try {
            return await this.commentService.deleteComment(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: Comment
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Post)('/post-comment/'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getAllComment", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("/get-comment-with-id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getComment", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)("/get-comment-with-room/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentWithRoomId", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: Comment
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Put)('/update-comment/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateComment", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Delete)("/delete-comment/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deleteComment", null);
CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comment'),
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map