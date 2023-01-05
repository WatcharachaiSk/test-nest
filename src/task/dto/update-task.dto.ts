import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ type: String, description: 'FirstName' })
  tc_FirstName: string;

  @ApiProperty({ type: String, description: 'LastName' })
  tc_LastName: string;

  @ApiProperty({ type: String, description: 'NickName' })
  tc_NickName: string;

  @ApiProperty({ type: String, description: 'Class' })
  tc_Class: string;

  @ApiProperty({ type: String, description: 'Shcool' })
  tc_Shcool: string;

  @ApiProperty({ type: String, description: 'Tel' })
  tc_Tel: string;

  @ApiProperty({ type: String, description: 'ImgProfile' })
  tc_ImgProfile: string;

  @ApiProperty({ type: String, description: 'Point' })
  tc_Point: number;

  @ApiProperty({ type: String, description: 'Exp' })
  tc_Exp: number;

  @ApiProperty({ type: String, description: 'ShopName' })
  tc_ShopName: string;
}
