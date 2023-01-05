import { PartialType } from '@nestjs/swagger';
import { CreateOrdersDetaiDto } from './create-orders_detai.dto';

export class UpdateOrdersDetaiDto extends PartialType(CreateOrdersDetaiDto) {}
