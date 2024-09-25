import { Module } from '@nestjs/common';
import { KhuyenMaiService } from './khuyenmai.service';
import { KhuyenMaiController } from './khuyenmai.controller';

@Module({
  controllers: [KhuyenMaiController],
  providers: [KhuyenMaiService],
})
export class KhuyenMaiModule {}