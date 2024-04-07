// Service.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subservice } from './Subservice.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Subservice, subservice => subservice.service)
  subservices: Subservice[];
}
