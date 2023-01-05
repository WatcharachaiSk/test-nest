import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateClassDto {
  @ApiProperty({ type: String, description: 'Name Class', example: '1/1' })
  @IsNotEmpty()
  cl_name: string;
}
