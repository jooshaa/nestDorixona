import { Injectable } from '@nestjs/common';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './model/model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PharmaciesService {
  constructor(@InjectModel(Pharmacy) private readonly pharmcyModel: typeof Pharmacy) { }
async create(createPharmacyDto: CreatePharmacyDto) {
    const name = createPharmacyDto.name
    const result = await this.pharmcyModel.create(createPharmacyDto)
    return result
    
  }

  findAll() {
    return this.pharmcyModel.findAll()
  }

  findOne(id: number) {
    return this.pharmcyModel.findByPk(id);
  }

async  update(id: number, updatePharmacyDto: UpdatePharmacyDto) {
    const [count, row] = await this.pharmcyModel.update(updatePharmacyDto,
      {
        where: { id },
        returning: true
      })
    return row[0]
  }

  remove(id: number) {
    return `This action removes a #${id} pharmacy`;
  }
}
