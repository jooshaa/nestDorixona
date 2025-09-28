import { Module } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { MedicinesController } from './medicines.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicine } from './model/medicine.model';
import { Pharmacy } from '../pharmacies/model/model';

@Module({
  imports:[SequelizeModule.forFeature([Medicine])],
  controllers: [MedicinesController],
  providers: [MedicinesService],
})
export class MedicinesModule {}
