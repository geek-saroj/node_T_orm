import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: string;


    @Column()
    estimated_hour: string;
}
