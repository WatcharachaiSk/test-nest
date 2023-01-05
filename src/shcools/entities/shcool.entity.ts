import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Class } from 'src/classes/entities/class.entity';
import { TaskSd } from 'src/task/entities/task.entity';

@Entity()
export class Shcool {
  @PrimaryGeneratedColumn()
  sh_id: string;

  @Column()
  sh_name: string;

  /*
  // 1 : M Class
  @OneToMany(() => Class, (classed) => classed.shcool)
  classed: Class;

  // 1 : 1 Sd
  @OneToOne(() => TaskSd, (taskSd) => taskSd.shcool)
  taskSd: TaskSd;
  */
}
