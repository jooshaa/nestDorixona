import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Medicine } from "../../medicines/model/medicine.model"
import { PharmaciesService } from "../../pharmacies/pharmacies.service"
import { Pharmacy } from "../../pharmacies/model/model"

interface IStock {
    pharamcyId: number
    medicineId: number
    quantity: number
}

@Table({ tableName: "Stock " })
export class Stock extends Model<Stock, IStock> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @ForeignKey(() => Medicine)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare medicineId: number

    @BelongsTo(() => Medicine)
    medicine: Medicine


    @ForeignKey(() => Pharmacy)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare Id: number

    @BelongsTo(() => Pharmacy)
    pharamcy: Pharmacy
}
