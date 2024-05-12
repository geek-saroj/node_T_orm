import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  Index,
} from "typeorm";
import { IsEmail, MinLength, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcrypt";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()

  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  @Index()
  @Column()
  @IsEmail()
  @MinLength(3)
  email: string;

  @Column()
  password: string;
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  public async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
