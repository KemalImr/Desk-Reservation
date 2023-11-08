import {BeforeInsert, BeforeUpdate, Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserResponseDto} from "../../../modules/user/user/dtos/response/userResponse.dto";
import {plainToClass} from "class-transformer";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @JoinTable()
    @ManyToOne(
        type => UserEntity,
        (user) => user.id
    )
    userId: number


    toDto(): UserResponseDto{
        return plainToClass(UserResponseDto,this, {
            excludeExtraneousValues: true
        });
    }
}
