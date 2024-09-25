import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
    success(status: number, message: string, data?: any) {
        return {
            status,
            message,
            data,
        };
    }

    error(status: number, message: string, error?: any) {
        return {
            status,
            message,
            error,
        };
    }
}