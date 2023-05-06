import { AuthService } from './auth.service';
import { nguoi_dung } from '@prisma/client';
import { userLogin } from 'src/user/Dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: userLogin): string;
    signup(body: nguoi_dung): void;
}
