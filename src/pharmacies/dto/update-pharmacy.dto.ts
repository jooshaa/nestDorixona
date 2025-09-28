import { PartialType } from '@nestjs/mapped-types';
import { CreatePharmacyDto } from './create-pharmacy.dto';

export class UpdatePharmacyDto extends PartialType(CreatePharmacyDto) {
    name: string
    address: string
    location: string
    phone: string
    email: string
    regioinId: number
    districtId: number
}
