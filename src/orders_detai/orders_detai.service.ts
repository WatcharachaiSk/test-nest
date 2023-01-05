import { Injectable } from '@nestjs/common';
import { CreateOrdersDetaiDto } from './dto/create-orders_detai.dto';
import { UpdateOrdersDetaiDto } from './dto/update-orders_detai.dto';

@Injectable()
export class OrdersDetaiService {
  create(createOrdersDetaiDto: CreateOrdersDetaiDto) {
    return 'This action adds a new ordersDetai';
  }

  findAll() {
    return `This action returns all ordersDetai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersDetai`;
  }

  update(id: number, updateOrdersDetaiDto: UpdateOrdersDetaiDto) {
    return `This action updates a #${id} ordersDetai`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersDetai`;
  }
}
