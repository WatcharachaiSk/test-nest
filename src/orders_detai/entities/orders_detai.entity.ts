import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrdersDetai {
  @PrimaryGeneratedColumn()
  ordD_id: string;

  @Column()
  ordD_name: string;
}
