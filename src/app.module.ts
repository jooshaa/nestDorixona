import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicineTypeModule } from './medicine-type/medicine-type.module';

@Module({
  imports: [MedicineTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
