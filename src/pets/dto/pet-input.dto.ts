import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha, IsInt } from "class-validator";

@InputType()
export class PetInput {
    @IsAlpha()
    @Field()
    name: string;

    @IsAlpha()
    @Field({ nullable: true })
    family?: string;

    @IsInt()
    @Field(type => Int, { nullable: true })
    ownerId?: number
}