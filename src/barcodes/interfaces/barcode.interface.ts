import { Document } from 'mongoose';

export interface Barcode extends Document {
  readonly productName: string;
  readonly barcodeNo: string;
  readonly type: string;
}
