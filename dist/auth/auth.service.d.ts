import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from 'src/user/Dto/user.dto';
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    login(userLogin: userLogin): string;
    signUp(user: nguoi_dung): void;
}
