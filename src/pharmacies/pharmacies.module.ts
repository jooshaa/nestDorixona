import { Module } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from '../district/model/district.models';
import { Pharmacy } from './model/model';

@Module({
  imports:[SequelizeModule.forFeature([Pharmacy])],
  controllers: [PharmaciesController],
  providers: [PharmaciesService],
})
export class PharmaciesModule {}
