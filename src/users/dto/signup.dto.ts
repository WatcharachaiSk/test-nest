import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ type: String, description: 'UserName', example: 'UserName' })
  @IsNotEmpty()
  m_username: string;

  @ApiProperty({ type: String, description: 'PassWord', example: 'PassWord' })
  @IsNotEmpty({
    message: 'Enter Password',
  })
  @Length(2, 15, {
    message: 'Password too short or too long',
  })
  m_password: string;

  @ApiProperty({ type: String, description: 'FirstName', example: 'FirstName' })
  @IsNotEmpty()
  m_FirstName: string;

  @ApiProperty({ type: String, description: 'LastName', example: 'LastName' })
  @IsNotEmpty()
  m_LastName: string;

  @ApiProperty({ type: String, description: 'NickName', example: 'NickName' })
  @IsNotEmpty()
  m_NickName: string;

  @ApiProperty({ type: String, description: 'Tel', example: 'Tel' })
  @IsNotEmpty()
  m_Tel: string;
}
