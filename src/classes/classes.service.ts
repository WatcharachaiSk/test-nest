import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

import { Class } from './entities/class.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private ClassesRepository: Repository<Class>,
  ) {}
  create(createClassDto: CreateClassDto): Promise<Class> {
    return this.ClassesRepository.save(createClassDto);
  }

  findAll() {
    return `This action returns all classes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
