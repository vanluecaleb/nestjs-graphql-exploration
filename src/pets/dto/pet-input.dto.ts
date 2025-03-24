import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class PetInput {
    @IsAlpha()
    @Field()
    name: string;

    @IsAlpha()
    @Field({ nullable: true })
    family?: string;
}