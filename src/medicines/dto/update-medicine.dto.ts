import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicineDto } from './create-medicine.dto';

export class UpdateMedicineDto extends PartialType(CreateMedicineDto) {
    name: string
    manufacturer: Date
    medicineTypeId: number
    price: number
    expiry_date: Date
    info: string
}
