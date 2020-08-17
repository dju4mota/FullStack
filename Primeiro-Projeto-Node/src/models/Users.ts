/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users') // substitui o constructor
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // tipo default = varchar
  name: string;

  @Column() // tipo default = varchar
  email: string;

  @Column() // tipo default = varchar
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Users;
