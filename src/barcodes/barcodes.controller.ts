import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarcodesService } from './barcodes.service';
import { Barcode } from './interfaces/barcode.interface';

@Controller('barcodes')
export class BarcodesController {
  constructor(private readonly barcodesService: BarcodesService) {}

  @Get()
  findAll(): Promise<Barcode[]> {
    return this.barcodesService.findAll();
  }

  @Get(':barcodeNo')
  findOne(@Param('barcodeNo') barcodeNo: string): Promise<Barcode> {
    return this.barcodesService.findOne(barcodeNo);
  }
}
