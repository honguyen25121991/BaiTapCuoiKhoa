import { Test, TestingModule } from '@nestjs/testing';
import { KhuyenMaiController } from './khuyenmai.controller';
import { KhuyenMaiService } from './khuyenmai.service';

describe('KhuyenMaiController', () => {
  let controller: KhuyenMaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhuyenMaiController],
      providers: [KhuyenMaiService], // Add the service here
    }).compile();

    controller = module.get<KhuyenMaiController>(KhuyenMaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});