import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;
    
    @Column()
    @Field()
    name: string;
    
    @Column({ nullable: true })
    @Field({ nullable: true })
    family?: string;

    @Column({ nullable: true })
    @Field(type => Int, { nullable: true })
    ownerId: number;

    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(type => Owner, { nullable: true })
    owner?: Owner;
}