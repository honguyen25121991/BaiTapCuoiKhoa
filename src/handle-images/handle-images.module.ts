import { Module } from '@nestjs/common';
import { HandleImagesController } from './handle-images.controller';
import { HandleImagesService } from './handle-images.service';

@Module({
  controllers: [HandleImagesController],
  providers: [HandleImagesService]
})
export class HandleImagesModule {}
