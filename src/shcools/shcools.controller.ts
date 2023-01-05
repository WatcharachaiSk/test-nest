import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShcoolsService } from './shcools.service';
import { CreateShcoolDto } from './dto/create-shcool.dto';
import { UpdateShcoolDto } from './dto/update-shcool.dto';

@Controller('shcools')
export class ShcoolsController {
  constructor(private readonly shcoolsService: ShcoolsService) {}

  @Post()
  create(@Body() createShcoolDto: CreateShcoolDto) {
    return this.shcoolsService.create(createShcoolDto);
  }

  @Get()
  findAll() {
    return this.shcoolsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shcoolsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShcoolDto: UpdateShcoolDto) {
    return this.shcoolsService.update(+id, updateShcoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shcoolsService.remove(+id);
  }
}
