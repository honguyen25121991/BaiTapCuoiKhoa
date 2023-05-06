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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async loginUser(email, pass_word) {
        const user = await this.prisma.nguoi_dung.findFirst({ where: { email, pass_word } });
        if (user !== null) {
            let token = this.jwtService.sign({ data: 'nodejs 29' }, { secret: this.config.get("SECRET_KEY"), expiresIn: "60m" });
            return { "token": token, "Message": "Login thanh cong" };
        }
        else {
            return `Sai tk hoac mat khau`;
        }
    }
    async createUser(user) {
        await this.prisma.nguoi_dung.create({ data: user });
        return `Tạo người dùng thành công`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map