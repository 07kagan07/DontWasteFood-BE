import { Test, TestingModule } from '@nestjs/testing';
import { BarcodesController } from './barcodes.controller';
import { BarcodesService } from './barcodes.service';

describe('BarcodesController', () => {
  let controller: BarcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodesController],
      providers: [BarcodesService],
    }).compile();

    controller = module.get<BarcodesController>(BarcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
