import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './model/medicine.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MedicinesService {
  constructor(@InjectModel(Medicine) private readonly medicineModel: typeof Medicine) { }

  async create(createMedicineDto: CreateMedicineDto) {
    const name = createMedicineDto.name
    const result = await this.medicineModel.create(createMedicineDto)
    // const body = await this.medicineModel.findOne({})
    return result
  }

  findAll() {
    return this.medicineModel.findAll()
  }

  findOne(id: number) {
    return this.medicineModel.findByPk(id)
  }

  async update(id: number, updateMedicineDto: UpdateMedicineDto) {
    const [count, row] = await this.medicineModel.update(updateMedicineDto,
      {
        where: { id },
        returning: true
      })
    return row[0]

  }

  async remove(id: number) {
    const deleted = await this.medicineModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
