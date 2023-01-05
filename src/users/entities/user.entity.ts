import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TableForeignKey,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { TaskTc } from 'src/task/entities/taskTc.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  m_id: string;

  @Column({ unique: true })
  m_username: string;
  @Column()
  m_password: string;

  @Column({ default: '' })
  m_FirstName: string;

  @Column({ default: '' })
  m_LastName: string;

  @Column({ default: '' })
  m_NickName: string;

  @Column({ default: '' })
  m_Tel: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  // 1 : M Tc
  @OneToMany((type) => TaskTc, (taskTc) => taskTc.user)
  taskTc: TaskTc;
}
