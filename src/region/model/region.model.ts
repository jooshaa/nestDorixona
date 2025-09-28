import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IRegionAttr {
    name: string
}

@Table({ tableName: "region" })
export class Region extends Model<Region, IRegionAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string
}
