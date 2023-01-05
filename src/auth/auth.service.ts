import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    @Inject(forwardRef(() => JwtService))
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneUser(username);
    if (user && user.m_password === password) {
      const { m_password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: any): Promise<any> {
    const payload = { m_username: user.m_username, sub: user.m_id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
