import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from 'src/user/Dto/user.dto';
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
    }): Promise<nguoi_dung[]>;
}
