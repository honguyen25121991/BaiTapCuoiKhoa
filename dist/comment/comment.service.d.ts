import { PrismaClient } from '@prisma/client';
export declare class CommentService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    getComment(id: string): Promise<any>;
    postComment(content: any): Promise<any>;
}
