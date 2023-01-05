import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskSd } from './entities/task.entity';
import { TaskTc } from './entities/taskTc.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TaskSd,TaskTc])],
  controllers: [TaskController],
  providers: [TaskService],
  exports:[TaskModule]
})
export class TaskModule {}
