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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
class Room {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ten_phong',
        type: String,
    }),
    __metadata("design:type", String)
], Room.prototype, "ten_phong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'khach',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "khach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'phong_ngu',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "phong_ngu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'giuong',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "giuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'phong_tam',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "phong_tam", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'mo_ta',
        type: String,
    }),
    __metadata("design:type", String)
], Room.prototype, "mo_ta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'gia_tien',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "gia_tien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'bep',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "bep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'may_giat',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "may_giat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ban_la',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "ban_la", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'tivi',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "tivi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'dieu_hoa',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "dieu_hoa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'wifi',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "wifi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'do_xe',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "do_xe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ho_boi',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "ho_boi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ban_ui',
        type: Boolean,
    }),
    __metadata("design:type", Boolean)
], Room.prototype, "ban_ui", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'hinh_anh',
        type: String,
    }),
    __metadata("design:type", String)
], Room.prototype, "hinh_anh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id_vi_tri',
        type: Number,
    }),
    __metadata("design:type", Number)
], Room.prototype, "id_vi_tri", void 0);
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async createRoom(body, auth) {
        try {
            return this.roomService.createRoom(body);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async getAllRoom(auth) {
        try {
            return await this.roomService.getAllRoom();
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async getRoomById(id, auth) {
        try {
            return this.roomService.getRoomById(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async getRoomByLocation(id, auth) {
        try {
            return this.roomService.getRoomByLocation(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async updateRoomInfo(id, auth, body) {
        try {
            return await this.roomService.updateRoomInfo(+id, body);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async removeRoom(id, auth) {
        try {
            return await this.roomService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    postImage(id, file) {
        const duong_dan = `localhost:3000/public/img/${file.filename}`;
        try {
            return this.roomService.postImage(id, duong_dan);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
    async getUserSearchPage(auth, pageIndex, pageSize, keyword) {
        try {
            return await this.roomService.getRoomSearchPage(pageIndex, pageSize, keyword);
        }
        catch (error) {
            throw new common_1.HttpException('Lỗi BE', 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: Room,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/create-room/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "createRoom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAllRoom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getRoomById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/room/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getRoomByLocation", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: Room,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Put)('/update-room/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoomInfo", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)('/delete-room/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "removeRoom", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/upload-image-room/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                fileUpload: {
                    type: 'string',
                    format: 'binary',
                },
            },
            required: ['fileUpload'],
        },
    }),
    (0, swagger_1.ApiProduces)('application/json'),
    (0, swagger_1.ApiOkResponse)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('fileUpload', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + '/public/img',
            filename: (req, file, callback) => callback(null, Date.now() + '_' + file.originalname),
        }),
    })),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RoomController.prototype, "postImage", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/search-room/'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Query)('pageIndex')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Query)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getUserSearchPage", null);
RoomController = __decorate([
    (0, swagger_1.ApiTags)('Room'),
    (0, common_1.Controller)('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map