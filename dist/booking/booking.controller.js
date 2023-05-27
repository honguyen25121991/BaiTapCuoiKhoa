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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
class Booking {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ma_phong", type: Number
    }),
    __metadata("design:type", Number)
], Booking.prototype, "ma_phong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ngay_den", type: String
    }),
    __metadata("design:type", String)
], Booking.prototype, "ngay_den", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ngay_di", type: String
    }),
    __metadata("design:type", String)
], Booking.prototype, "ngay_di", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "so_luong_khach", type: Number
    }),
    __metadata("design:type", Number)
], Booking.prototype, "so_luong_khach", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "id_nguoi_dung", type: Number
    }),
    __metadata("design:type", Number)
], Booking.prototype, "id_nguoi_dung", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "id_phong", type: Number
    }),
    __metadata("design:type", Number)
], Booking.prototype, "id_phong", void 0);
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async createBooking(body, auth) {
        try {
            return await this.bookingService.createBooking(body);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getAllBooking(auth) {
        try {
            return await this.bookingService.getAllBooking();
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getBookingWithId(id, auth) {
        try {
            return await this.bookingService.getBookingWithId(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getBookingWithIdUser(id, auth) {
        try {
            return await this.bookingService.getBookingWithIdUser(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async updateComment(id, auth, body) {
        const { ma_phong, ngay_den, ngay_di, so_luong_khach, id_nguoi_dung, id_phong } = body;
        try {
            return await this.bookingService.updateBooking({
                ma_phong,
                ngay_den,
                ngay_di,
                so_luong_khach,
                id_nguoi_dung, id_phong
            }, id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async deleteBooking(id, auth) {
        try {
            return await this.bookingService.deleteBooking(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: Booking
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Post)('/create-booking/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createBooking", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAllBooking", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("/get-booking-with-id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getBookingWithId", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("/get-booking-with-user-id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getBookingWithIdUser", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: Booking
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Put)('/update-booking/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "updateComment", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Delete)("/delete-booking/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "deleteBooking", null);
BookingController = __decorate([
    (0, swagger_1.ApiTags)('Booking'),
    (0, common_1.Controller)('booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
exports.BookingController = BookingController;
//# sourceMappingURL=booking.controller.js.map