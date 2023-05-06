"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleImagesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let HandleImagesService = class HandleImagesService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getImages() {
        return await this.prisma.hinh_anh.findMany();
    }
    async getNameImage(name) {
        return await this.prisma.hinh_anh.findFirst({ where: { ten_hinh: name } });
    }
    async getDetaiImage(id) {
        return await this.prisma.hinh_anh.findFirst({ where: { hinh_id: +id } });
    }
    async checkSaveImage(id) {
        const check = await this.prisma.luu_anh.findFirst({ where: { hinh_id: +id } });
        if (check !== null) {
            return `Đã lưu`;
        }
        else {
            return ` Chưa lưu`;
        }
    }
    async getListImageSaved(id) {
        return await this.prisma.hinh_anh.findMany({ where: { nguoi_dung_id: +id } });
    }
    async getListImageCreated(id) {
        return await this.prisma.luu_anh.findMany({ where: { nguoi_dung_id: +id } });
    }
    async deleteImage(id) {
        const check = await this.prisma.hinh_anh.delete({ where: { hinh_id: +id } });
        console.log(check);
        if (check !== null) {
            return `Delete success`;
        }
        else {
            return `Xoá thất bại`;
        }
    }
    async updateImage(id, imageName) {
        let data = await this.prisma.hinh_anh.findFirst({
            where: { nguoi_dung_id: +id }
        });
        data.ten_hinh = imageName;
        await this.prisma.hinh_anh.update({
            data, where: {
                hinh_id: +id
            }
        });
        return "Upload Success";
    }
};
HandleImagesService = __decorate([
    (0, common_1.Injectable)()
], HandleImagesService);
exports.HandleImagesService = HandleImagesService;
//# sourceMappingURL=handle-images.service.js.map