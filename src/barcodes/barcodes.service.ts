import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Barcode } from './interfaces/barcode.interface';

@Injectable()
export class BarcodesService {
  constructor(
    @Inject('BARCODE_MODEL')
    private barcodeModel: Model<Barcode>,
  ) {}

  findAll(): Promise<Barcode[]> {
    return this.barcodeModel.find().exec();
  }

  findOne(barcodeNo: string): Promise<Barcode> {
    return this.barcodeModel.findOne({ barcodeNo: barcodeNo }).exec();
  }
}
