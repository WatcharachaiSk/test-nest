import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ type: String, description: 'ImgProfile' })
  tc_ImgProfile: string;

  @ApiProperty({ type: String, description: 'ShopName' })
  tc_ShopName: string;
}
