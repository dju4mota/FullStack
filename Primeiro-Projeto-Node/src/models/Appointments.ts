import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments') // substitui o constructor
class Appointments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // tipo default = varchar
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointments;
