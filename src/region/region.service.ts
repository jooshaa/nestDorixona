import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './model/region.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class RegionService {
  constructor(@InjectModel(Region)private readonly regionModel: typeof Region){}

  create(createRegionDto: CreateRegionDto) {
    if (!createRegionDto) {
      throw new Error("not found")
    };
    return Region.create(createRegionDto)
  }

  findAll() {
    return Region.findAll();
  }

  async findOne(id: number) {
    const region = await Region.findByPk(id)
    if (!region) {
      return "not found such a region"
    }
    return region
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const updated = await Region.update(updateRegionDto,
      {
        where: { id },
        returning: true
      })
    return this.update[1][0]
  }

  remove(id: number) {

    const deleted = Region.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
