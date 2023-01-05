import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { SignUpDto } from './signup.dto';

export class UpdateUserDto extends PartialType(SignUpDto) {
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
