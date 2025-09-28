import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Region } from '../../region/model/region.model';


interface IDistrict {
    name: string,
    regionId: number
}

@Table({tableName: "district"})
export class District extends Model<District, IDistrict>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id:number

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    declare name: string

    @ForeignKey(()=> Region)
    @Column({
        type: DataType.INTEGER,
        onDelete: "CASCADE"
    })
    declare regionId: number

    @BelongsTo(()=> Region)
    region: Region
}
