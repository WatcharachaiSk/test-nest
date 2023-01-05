import { Injectable } from '@nestjs/common';
import { CreateShcoolDto } from './dto/create-shcool.dto';
import { UpdateShcoolDto } from './dto/update-shcool.dto';

@Injectable()
export class ShcoolsService {
  create(createShcoolDto: CreateShcoolDto) {
    return 'This action adds a new shcool';
  }

  findAll() {
    return `This action returns all shcools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shcool`;
  }

  update(id: number, updateShcoolDto: UpdateShcoolDto) {
    return `This action updates a #${id} shcool`;
  }

  remove(id: number) {
    return `This action removes a #${id} shcool`;
  }
}
