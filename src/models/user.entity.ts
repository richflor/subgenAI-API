import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique:true})
    @IsEmail()
    email: string

    @Column()
    password: string

    @Column({ default: () => "NOW()" })
    created_at: Date
}