import { Column, DataType, Model, Table} from "sequelize-typescript"


interface IMedicine_type{
    name: string
}

@Table({tableName: "machine-type"})
export class MedicineType extends Model < MedicineType, IMedicine_type > {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id:number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name:string
}
