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
exports.HandleImagesController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const handle_images_service_1 = require("./handle-images.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const passport_1 = require("@nestjs/passport");
let HandleImagesController = class HandleImagesController {
    constructor(handleImages) {
        this.handleImages = handleImages;
        this.prisma = new client_1.PrismaClient();
    }
    updateImage(id, file) {
        try {
            return this.handleImages.updateImage(id, file.filename);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    getAll() {
        return this.handleImages.getImages();
    }
    getDetailImage(body) {
        const { name } = body;
        try {
            return this.handleImages.getNameImage(name);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    getDetail(id) {
        try {
            return this.handleImages.getDetaiImage(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    checkSaveImage(id) {
        try {
            return this.handleImages.checkSaveImage(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    getListImageSaved(id) {
        try {
            return this.handleImages.getListImageSaved(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    getListImageCreated(id) {
        try {
            return this.handleImages.getListImageCreated(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    deleteImage(id) {
        try {
            return this.handleImages.deleteImage(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiConsumes)('mutilpart/from-data'),
    (0, swagger_1.ApiBody)({
        description: 'fileload',
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('fileUpload', {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, Date.now() + "_" + file.originalname)
        })
    })),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/update-image/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "updateImage", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "getDetailImage", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "getDetail", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/check/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "checkSaveImage", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/save-list/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "getListImageSaved", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/create-list/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "getListImageCreated", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HandleImagesController.prototype, "deleteImage", null);
HandleImagesController = __decorate([
    (0, common_1.Controller)('handle-images'),
    __metadata("design:paramtypes", [handle_images_service_1.HandleImagesService])
], HandleImagesController);
exports.HandleImagesController = HandleImagesController;
//# sourceMappingURL=handle-images.controller.js.map