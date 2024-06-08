import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offering {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "double precision" })
  price: number;

  @Column()
  estimated_hour: string;
}
