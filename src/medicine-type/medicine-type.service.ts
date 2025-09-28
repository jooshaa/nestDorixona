import { Injectable } from '@nestjs/common';
import { CreateMedicineTypeDto } from './dto/create-medicine-type.dto';
import { UpdateMedicineTypeDto } from './dto/update-medicine-type.dto';
import { MedicineType } from './model/medicine-type.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MedicineTypeService {
  constructor(@InjectModel(MedicineType)private readonly medicineType: typeof MedicineType){}

  create(createMedicineTypeDto: CreateMedicineTypeDto) {
    if(!createMedicineTypeDto){
      throw new Error ("not found body")
    }
    return MedicineType.create(createMedicineTypeDto);
  }

  findAll() {
    return MedicineType.findAll();
  }

  findOne(id: number) {
    return MedicineType.findByPk(id);
  }

  async update(id: number, updateMedicineTypeDto: UpdateMedicineTypeDto) {
    const mediceType = await MedicineType.update(updateMedicineTypeDto, {
      where: {id},
      returning: true
    }) ;
    return mediceType[1][0];
  }

  remove(id: number) {
    const deleted = MedicineType.destroy({where: {id}});
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
