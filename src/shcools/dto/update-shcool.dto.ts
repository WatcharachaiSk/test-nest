import { PartialType } from '@nestjs/swagger';
import { CreateShcoolDto } from './create-shcool.dto';

export class UpdateShcoolDto extends PartialType(CreateShcoolDto) {}
