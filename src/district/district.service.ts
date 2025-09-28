import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './model/district.models';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private readonly districtModel: typeof District){}
  create(createDistrictDto: CreateDistrictDto) {

    if (!createDistrictDto) {
      throw new Error("not found")
    };
    return District.create(createDistrictDto)
  }


  findAll() {
    return District.findAll();
  }

async  findOne(id: number) {
     const district = await District.findByPk(id)
        if (!district) {
          return "not found such a district"
        }
        return district
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const [count, row] = await District.update(updateDistrictDto,
          {
            where: { id },
            returning: true
          })
        return row[0]
  }

  async remove(id: number) {
    const deleted =await District.destroy({ where: { id } });
        if (!deleted) {
          return { message: "not found this kind of id" }
        }
        return { message: `deleted id:${id} ` }
  }
}
