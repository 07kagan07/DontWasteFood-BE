import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarcodesModule } from './barcodes/barcodes.module';

@Module({
  imports: [BarcodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
