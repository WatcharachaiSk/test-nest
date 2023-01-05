import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersDetaiService } from './orders_detai.service';
import { CreateOrdersDetaiDto } from './dto/create-orders_detai.dto';
import { UpdateOrdersDetaiDto } from './dto/update-orders_detai.dto';

@Controller('orders-detai')
export class OrdersDetaiController {
  constructor(private readonly ordersDetaiService: OrdersDetaiService) {}

  @Post()
  create(@Body() createOrdersDetaiDto: CreateOrdersDetaiDto) {
    return this.ordersDetaiService.create(createOrdersDetaiDto);
  }

  @Get()
  findAll() {
    return this.ordersDetaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersDetaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersDetaiDto: UpdateOrdersDetaiDto) {
    return this.ordersDetaiService.update(+id, updateOrdersDetaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersDetaiService.remove(+id);
  }
}
