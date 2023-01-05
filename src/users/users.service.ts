import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignUpDto } from './dto/signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  //SingUp
  async signUp(signupUpDto: SignUpDto): Promise<User> {
    try {
      // ? ถ้าต้องการมีการ hashedPassword
      /*
      
      const { m_username, m_password } = signupUpDto;
      //การเข้ารหัส PassWord
      //const hashedPassword = await bcrypt.hashSync(password, 5);
      const user = this.usersRepository.create({
        m_username,
        m_password,
      });
*/
      return await this.usersRepository.save(signupUpDto);
    } catch (e) {
      throw new ConflictException({
        message: ['Username has been already using.'],
      });
    }
  }

  async findOneUser(m_username: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({ where: { m_username } });
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  update(m_id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(m_id, updateUserDto);
  }

  async remove(m_id: string): Promise<void> {
    await this.usersRepository.delete(m_id);
  }
}
