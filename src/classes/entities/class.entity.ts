import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shcool } from 'src/shcools/entities/shcool.entity';
import { TaskSd } from 'src/task/entities/task.entity';
import { TaskTc } from 'src/task/entities/taskTc.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  cl_id: string;

  @Column()
  cl_name: string;

  /*
  //M : 1
  @ManyToOne(() => Shcool, (shcool) => shcool.classed, { onDelete: 'SET NULL' })
  @JoinColumn()
  shcool: Shcool;

  // 1 : 1 Sd
  @OneToOne(() => TaskSd, (taskSd) => taskSd.classed)
  taskSd: TaskSd;

  //M : 1 Teacher
  @ManyToOne((type) => TaskTc, (taskTc) => taskTc.classes)
  taskTc: TaskTc;
  */
}
