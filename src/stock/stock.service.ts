import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './model/stock.';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StockService {
  constructor(@InjectModel(Stock) private readonly stockModel: typeof Stock) { }
   async create(createStockDto: CreateStockDto) {
       const result = await this.stockModel.create(createStockDto)
       return result
  }


  findAll() {
    return this.stockModel.findAll();
  }

  findOne(id: number) {
    return this.stockModel.findByPk(id);
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    const [count, row] = await this.stockModel.update(updateStockDto,
      {
        where: { id },
        returning: true
      })
    return row[0]

  }

  async remove(id: number) {
    const deleted = await this.stockModel.destroy({ where: { id } });
    if (!deleted) {
      return { message: "not found this kind of id" }
    }
    return { message: `deleted id:${id} ` }
  }
}
