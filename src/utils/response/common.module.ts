import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';

@Module({
  providers: [ResponseService],
  exports: [ResponseService], // Export the service
})
export class ResponseModule {}