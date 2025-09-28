import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Region } from "../../region/model/region.model"
import { District } from "../../district/model/district.models"


interface IPharmacy {
    name: string
    address: string
    location: string
    phone: string
    email: string
    regioinId: number
    districtId: number
}

@Table({ tableName: "Pharamicy" })

export class Pharmacy extends Model<Pharmacy, IPharmacy> {

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
        type: DataType.STRING
    })
    declare address: string

    @Column({
        type: DataType.STRING
    })
    declare location: string

    @Column({
        type: DataType.STRING
    })
    declare phone: string

    @Column({
        type: DataType.STRING
    })
    declare email: string

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare regionId: number
    @BelongsTo(() => Region)
    region: Region

    @ForeignKey(()=> District)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare districtId
    @BelongsTo(()=>District)
    district: District
}
