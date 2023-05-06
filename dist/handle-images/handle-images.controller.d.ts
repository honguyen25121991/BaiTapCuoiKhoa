/// <reference types="multer" />
import { PrismaClient } from '@prisma/client';
import { HandleImagesService } from './handle-images.service';
export declare class HandleImagesController {
    private handleImages;
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    constructor(handleImages: HandleImagesService);
    updateImage(id: string, file: Express.Multer.File): Promise<string>;
    getAll(): Promise<any>;
    getDetailImage(body: {
        name: string;
    }): Promise<any>;
    getDetail(id: string): Promise<any>;
    checkSaveImage(id: number): Promise<any>;
    getListImageSaved(id: number): Promise<any>;
    getListImageCreated(id: number): Promise<any>;
    deleteImage(id: string): Promise<any>;
}
