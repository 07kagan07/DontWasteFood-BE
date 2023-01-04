import { PartialType } from '@nestjs/mapped-types';
import { CreateBarcodeDto } from './create-barcode.dto';

export class UpdateBarcodeDto extends PartialType(CreateBarcodeDto) {}
