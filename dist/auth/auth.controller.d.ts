/// <reference types="multer" />
import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(body: userLogin): Promise<nguoi_dung[]>;
    createUser(body: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
    }, file: Express.Multer.File): Promise<nguoi_dung[]>;
}
