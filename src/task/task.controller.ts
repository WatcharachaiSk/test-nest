import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guards';
import { TaskTc } from './entities/taskTc.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('task')
@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @Request() { user }: any,
  ): Promise<TaskTc> {
    return this.taskService.create(createTaskDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() { user }: any) {
    return this.taskService.findAll(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Request() { user }: any) {
    return this.taskService.findOne(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') tc_id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request() { user }: any,
  ) {
    return this.taskService.update(+tc_id, updateTaskDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') tc_id: string, @Request() { user }: any) {
    return this.taskService.remove(tc_id, user);
  }
}
