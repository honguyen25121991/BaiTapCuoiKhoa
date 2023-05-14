import { PrismaClient } from '@prisma/client';
export declare class CommentService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    createComment(data: {
        ma_cong_viec: number;
        ma_nguoi_binh_luan: number;
        ngay_binh_luan: string;
        noi_dung: string;
        id_phong: number;
        sao_binh_luan: number;
    }): Promise<any>;
    getComment(id: string): Promise<any>;
    getCommentWithRoomId(id: number): Promise<any>;
    getAllComment(): Promise<any>;
    updateComment(data: {
        ma_cong_viec: number;
        ma_nguoi_binh_luan: number;
        ngay_binh_luan: string;
        noi_dung: string;
        sao_binh_luan: number;
        id_phong: number;
    }, id: number): Promise<any>;
    deleteComment(id: string): Promise<any>;
}
