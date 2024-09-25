import { Test, TestingModule } from '@nestjs/testing';
import { KhuyenMaiService } from './khuyenmai.service';

describe('KhuyenmaiService', () => {
  let service: KhuyenMaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhuyenMaiService],
    }).compile();

    service = module.get<KhuyenMaiService>(KhuyenMaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
