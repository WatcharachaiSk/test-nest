import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'username' })
  m_username: string;

  @ApiProperty({ type: String, description: 'password' })
  m_password: string;
}
