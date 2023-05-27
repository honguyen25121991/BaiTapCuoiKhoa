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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const config_1 = require("@nestjs/config");
const client_1 = require("@prisma/client");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
class User {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "email", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "pass_word", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "pass_word", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "name", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "phone", type: Number
    }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "birth_day", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "birth_day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "gender", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "role", type: String
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
let UserController = class UserController {
    constructor(userService, config) {
        this.userService = userService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async createUser(body, auth) {
        try {
            const { email, pass_word, name, phone, birth_day, gender, role } = body;
            return await this.userService.createUser({
                email, pass_word, name, phone, birth_day,
                gender, role
            });
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getAllUser(auth) {
        try {
            return await this.userService.getAllUser();
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getUserWithId(id, auth) {
        try {
            return await this.userService.getUserWithId(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async getUserWithName(name, auth) {
        try {
            return await this.userService.getUserWithName(name);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async updateUser(id, body) {
        const { email, pass_word, name, phone, birth_day, gender, role } = body;
        try {
            return await this.userService.updateUser({
                email, pass_word, name, phone, birth_day,
                gender, role
            }, id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async deleteUser(id, auth) {
        try {
            return await this.userService.deleteUser(id);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: User
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("/get-user-with-id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserWithId", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Get)("/get-user-with-name/:name"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserWithName", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: User
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Put)('/update-user/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("jwt")),
    (0, common_1.Delete)("/delete-user/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)("User"),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map