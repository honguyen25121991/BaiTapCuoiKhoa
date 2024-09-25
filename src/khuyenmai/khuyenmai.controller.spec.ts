import { Test, TestingModule } from '@nestjs/testing';
import { KhuyenmaiController } from './khuyenmai.controller';

describe('KhuyenmaiController', () => {
  let controller: KhuyenmaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhuyenmaiController],
    }).compile();

    controller = module.get<KhuyenmaiController>(KhuyenmaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
