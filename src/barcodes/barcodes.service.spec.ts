import { Test, TestingModule } from '@nestjs/testing';
import { BarcodesService } from './barcodes.service';

describe('BarcodesService', () => {
  let service: BarcodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarcodesService],
    }).compile();

    service = module.get<BarcodesService>(BarcodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
