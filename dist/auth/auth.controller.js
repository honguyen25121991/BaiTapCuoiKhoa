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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
class Auth {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "email", type: String
    }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "pass_word", type: String
    }),
    __metadata("design:type", String)
], Auth.prototype, "pass_word", void 0);
class AuthLogin {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "email", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "pass_word", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "pass_word", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "name", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "phone", type: Number
    }),
    __metadata("design:type", Number)
], AuthLogin.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "birth_day", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "birth_day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "gender", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "role", type: String
    }),
    __metadata("design:type", String)
], AuthLogin.prototype, "role", void 0);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    loginUser(body) {
        try {
            const { email, pass_word } = body;
            return this.authService.loginUser(email, pass_word);
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
    async createUser(body) {
        try {
            const { email, pass_word, name, phone, birth_day, gender, role } = body;
            return await this.authService.createUser({
                email, pass_word, name, phone, birth_day,
                gender, role
            });
        }
        catch (error) {
            throw new common_1.HttpException("Lỗi BE", 500);
        }
    }
};
__decorate([
    (0, swagger_1.ApiBody)({
        type: Auth
    }),
    (0, common_1.Post)("/signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: AuthLogin
    }),
    (0, common_1.Post)("/signin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)("Auth"),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map