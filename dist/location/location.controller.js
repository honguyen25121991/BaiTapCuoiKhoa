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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
class Location {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ten_vi_tri", type: String
    }),
    __metadata("design:type", String)
], Location.prototype, "ten_vi_tri", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "tinh_thanh", type: String
    }),
    __metadata("design:type", String)
], Location.prototype, "tinh_thanh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "quoc_gia", type: String
    }),
    __metadata("design:type", String)
], Location.prototype, "quoc_gia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "hinh_anh", type: String
    }),
    __metadata("design:type", String)
], Location.prototype, "hinh_anh", void 0);
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async createLocation(auth, body) {
        try {
            return this.locationService.createLocation(body);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getAllLocation(auth) {
        try {
            return await this.locationService.getAllLocation();
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getLocationwithId(auth, id) {
        try {
            return await this.locationService.getLocationwithId(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async updateLocation(auth, id, body) {
        const { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh, } = body;
        try {
            return await this.locationService.updateLocation({
                ten_vi_tri,
                tinh_thanh,
                quoc_gia,
                hinh_anh,
            }, id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async deleteLocation(auth, id) {
        try {
            return await this.locationService.deleteLocation(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    postImage(id, _file, body) {
        const { ten_vi_tri, tinh_thanh, quoc_gia, } = body;
        const duong_dan = `localhost:3000/public/img/${_file.filename}`;
        try {
            return this.locationService.postImage(id, duong_dan, ten_vi_tri, tinh_thanh, quoc_gia);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: Location
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Post)('/create-location/'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "createLocation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getAllLocation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)(`/get-location-with-id/:id`),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocationwithId", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: Location
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Put)('/update-location/:id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocation", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Delete)("/delete-location/:id"),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteLocation", null);
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
    (0, common_1.Post)('/post-image-location/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "postImage", null);
LocationController = __decorate([
    (0, swagger_1.ApiTags)('Location'),
    (0, common_1.Controller)('location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map