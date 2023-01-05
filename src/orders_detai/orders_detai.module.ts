import { Module } from '@nestjs/common';
import { OrdersDetaiService } from './orders_detai.service';
import { OrdersDetaiController } from './orders_detai.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersDetai } from './entities/orders_detai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersDetai])],
  controllers: [OrdersDetaiController],
  providers: [OrdersDetaiService],
})
export class OrdersDetaiModule {}
