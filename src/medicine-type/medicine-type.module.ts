import { Module } from '@nestjs/common';
import { MedicineTypeService } from './medicine-type.service';
import { MedicineTypeController } from './medicine-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedicineType } from './model/medicine-type.entity';

@Module({
  imports:[SequelizeModule.forFeature([MedicineType])],
  controllers: [MedicineTypeController],
  providers: [MedicineTypeService],
})
export class MedicineTypeModule {}
