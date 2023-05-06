import { AuthService } from './auth.service';
import { userLogin } from 'src/user/Dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(body: userLogin): Promise<{
        email: string;
        pass_word: string;
    }>;
    createUser(body: {
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
    }): Promise<{
        email: string;
        pass_word: string;
        name: string;
        phone: number;
        birth_day: string;
        gender: string;
        role: string;
    }>;
}
