import { Module } from '@nestjs/common';
import { BarcodesService } from './barcodes.service';
import { BarcodesController } from './barcodes.controller';
import { barcodesProviders } from './barcode.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BarcodesController],
  providers: [BarcodesService, ...barcodesProviders],
})
export class BarcodesModule {}
