import { PrismaClient } from '@prisma/client';
export declare class HandleImagesService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    getImages(): Promise<any>;
    getNameImage(name: string): Promise<any>;
    getDetaiImage(id: string): Promise<any>;
    checkSaveImage(id: number): Promise<any>;
    getListImageSaved(id: number): Promise<any>;
    getListImageCreated(id: number): Promise<any>;
    deleteImage(id: string): Promise<any>;
    updateImage(id: string, imageName: string): Promise<string>;
}
