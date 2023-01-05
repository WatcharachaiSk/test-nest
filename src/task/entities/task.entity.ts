import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TableForeignKey,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Class } from 'src/classes/entities/class.entity';
import { Shcool } from 'src/shcools/entities/shcool.entity';
import { TaskTc } from './taskTc.entity';

//Table นักเรียน
@Entity()
export class TaskSd {
  @PrimaryGeneratedColumn()
  m_id: string;

  @Column({ default: '' })
  m_FirstName: string;

  @Column({ default: '' })
  m_LastName: string;

  @Column({ default: '' })
  m_NickName: string;

  @Column({ default: 0 })
  m_Point: number;

  @Column({ default: 0 })
  m_Exp: number;

  @Column({ default: '' })
  m_Tel: string;

  @Column({ default: '' })
  m_ImgProfile: string;

  @Column({ default: '' })
  m_ShopName: string;

  /*
  //1 : 1 Class
  @OneToOne(() => Class, (classed) => classed.taskSd)
  @JoinColumn()
  classed: Class;

  //1:1 Shcool
  @OneToOne(() => Shcool, (shcool) => shcool.taskSd)
  @JoinColumn()
  shcool: Shcool;

  // 1 : M Teacher
  @OneToMany(() => TaskTc, (taskTc) => taskTc.taskSd)
  @JoinColumn()
  taskTc: TaskTc;
  */
}

