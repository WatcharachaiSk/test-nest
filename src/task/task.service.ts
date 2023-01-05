import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { TaskSd } from './entities/task.entity';
import { TaskTc } from './entities/taskTc.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskTc)
    private taskTcRepository: Repository<TaskTc>,
    @InjectRepository(TaskSd)
    private taskSdRepository: Repository<TaskSd>,
  ) {}

  async create(createTaskDto: CreateTaskDto, user: User): Promise<TaskTc> {
    const {
      tc_ImgProfile,
      tc_ShopName
    } = createTaskDto
    const task = this.taskTcRepository.create({
      tc_ImgProfile,
      tc_ShopName,
      user,
  })

  try {
    await this.taskTcRepository.save(task)
    return task
} catch(e) {
    throw new ConflictException({
        message: ['Something\s wrong I can feel it.']
    })
}
  }

  findAll(user: User): Promise<TaskTc[]> {
    return this.taskTcRepository.find();
  }

  async findOne(tc_id: string, user: User): Promise<TaskTc | undefined> {
    const users = await this.taskTcRepository.findOne({
      where: { user, tc_id },
    });
    return users;
  }

  async update(tc_id: number, updateTaskDto: UpdateTaskDto, user: User) {
    const users = await this.taskTcRepository.update(tc_id, updateTaskDto);
    return users;
  }

  async remove(tc_id: string, user: User): Promise<void> {
    await this.taskTcRepository.delete(tc_id);
  }
}
