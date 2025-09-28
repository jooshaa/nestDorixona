import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { MedicineType } from "../../medicine-type/model/medicine-type.entity"

interface IMedicine {
    name: string
    manufacturer: Date
    medicineTypeId: number
    price: number
    expiry_date: Date
    info: string
}

@Table({ tableName: "Medicine" })
export class Medicine extends Model<Medicine, IMedicine> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare name: string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    declare manufacturer: Date

    @ForeignKey(()=> MedicineType)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare medicineTypeId: number

    @BelongsTo(()=>MedicineType)
    medicineType: MedicineType

    @Column({
        type: DataType.DECIMAL,
        allowNull: false
    })
    declare price: number

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    declare expiry_date: Date

    @Column({
        type: DataType.TEXT
    })
    declare info: string
}
