import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ShcoolsModule } from './shcools/shcools.module';
import { ClassesModule } from './classes/classes.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersDetaiModule } from './orders_detai/orders_detai.module';

import { User } from './users/entities/user.entity';
import { Shcool } from './shcools/entities/shcool.entity';
import { Class } from './classes/entities/class.entity';
import { Product } from './products/entities/product.entity';
import { Order } from './orders/entities/order.entity';
import { OrdersDetai } from './orders_detai/entities/orders_detai.entity';
import { TaskModule } from './task/task.module';
import { TaskSd } from './task/entities/task.entity';
import { TaskTc } from './task/entities/taskTc.entity';
import { AuthModule } from './auth/auth.module';
const configDb = [User,TaskTc];
/* [User, Shcool, Class, Task, Product, Order, OrdersDetai, TaskSd, TaskTc]; */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_test',
      entities: configDb,
      synchronize: true,
    }),
    UsersModule,
    ShcoolsModule,
    ClassesModule,
    ProductsModule,
    OrdersModule,
    OrdersDetaiModule,
    TaskModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
