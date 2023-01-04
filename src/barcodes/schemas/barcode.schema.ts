import * as mongoose from 'mongoose';

export const BarcodeSchema = new mongoose.Schema({
  productName: String,
  barcodeNo: String,
  type: String,
});
