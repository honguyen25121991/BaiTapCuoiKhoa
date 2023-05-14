import { CommentService } from './comment.service';
import { binh_luan } from '@prisma/client';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(auth: string, body: {
        ma_cong_viec: number;
        ma_nguoi_binh_luan: number;
        ngay_binh_luan: string;
        noi_dung: string;
        sao_binh_luan: number;
        id_phong: number;
    }): Promise<binh_luan[]>;
    getAllComment(auth: string): Promise<binh_luan[]>;
    getComment(id: string, auth: string): Promise<binh_luan[]>;
    getCommentWithRoomId(id: number, auth: string): Promise<binh_luan[]>;
    updateComment(id: number, body: {
        ma_cong_viec: number;
        ma_nguoi_binh_luan: number;
        ngay_binh_luan: string;
        noi_dung: string;
        sao_binh_luan: number;
        id_phong: number;
    }): Promise<binh_luan[]>;
    deleteComment(id: string, auth: string): Promise<binh_luan[]>;
}
