import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Class } from 'src/classes/entities/class.entity';
import { Shcool } from 'src/shcools/entities/shcool.entity';
import { User } from 'src/users/entities/user.entity';
import { TaskSd } from './task.entity';

//Table ครู
@Entity()
export class TaskTc {
  @PrimaryGeneratedColumn()
  tc_id: string;

  @Column({ default: 1000 })
  tc_Point: number;

  @Column({ default: 1000 })
  tc_Exp: number;

  @Column({ default: '' })
  tc_ImgProfile: string;

  @Column({ default: '' })
  tc_ShopName: string;

  /*
  // M : 1 Student
  @ManyToOne(() => TaskSd, (taskSd) => taskSd.taskTc)
  @JoinColumn()
  taskSd: TaskSd;

  // 1 : M Class
  @OneToMany ((type) => Class,classes=> classes.taskTc)
  @JoinColumn()
  classes:Class
  */

  @ManyToOne((type) => User, (user) => user.taskTc)
  user: User;
}
