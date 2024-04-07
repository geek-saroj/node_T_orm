// Subservice.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Service } from './Services.entites';

@Entity()
export class Subservice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Service, service => service.subservices)
  service: Service;
}
