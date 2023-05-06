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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
let AuthService = class AuthService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
        this.prisma = new client_1.PrismaClient();
    }
    async loginUser(email, pass_word) {
        const date = new Date();
        const user = await this.prisma.nguoi_dung.findFirst({ where: { email, pass_word } });
        if (user !== null) {
            let token = this.jwtService.sign({ data: 'nodejs 29' }, { secret: this.config.get("SECRET_KEY"), expiresIn: "60m" });
            return {
                "statusCode": 200,
                "content:": {
                    user
                },
                "token": token,
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email hoặc mật khẩu không đúng !",
                "dateTime": date
            };
        }
    }
    async createUser(user) {
        let { email, name, phone, birth_day, gender, role } = user;
        const date = new Date();
        const resuft = await this.prisma.nguoi_dung.findFirst({ where: { email } });
        if (resuft === null) {
            await this.prisma.nguoi_dung.create({ data: user });
            return {
                "statusCode": 200,
                "message": "Tạo người dùng thành công",
                "content": {
                    email, name, phone, birth_day,
                    gender, role
                },
                "dateTime": date
            };
        }
        else {
            return {
                "statusCode": 400,
                "message": "Yêu cầu không hợp lệ!",
                "content": "Email đã tồn tại !",
                "dateTime": date
            };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map