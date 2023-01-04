import { Connection } from 'mongoose';
import { BarcodeSchema } from './schemas/barcode.schema';

export const barcodesProviders = [
  {
    provide: 'BARCODE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Barcode', BarcodeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
