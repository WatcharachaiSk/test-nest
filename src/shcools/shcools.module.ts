import { Module } from '@nestjs/common';
import { ShcoolsService } from './shcools.service';
import { ShcoolsController } from './shcools.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Shcool } from './entities/shcool.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shcool])],
  controllers: [ShcoolsController],
  providers: [ShcoolsService],
})
export class ShcoolsModule {}
