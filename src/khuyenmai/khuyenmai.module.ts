import { Module } from '@nestjs/common';
import { KhuyenMaiService } from './khuyenmai.service';
import { KhuyenMaiController } from './khuyenmai.controller';
import { ResponseModule } from '../utils/response/common.module'; // Import the module containing ResponseService

@Module({
  imports: [ResponseModule],
  controllers: [KhuyenMaiController],
  providers: [KhuyenMaiService],
})
export class KhuyenMaiModule {}