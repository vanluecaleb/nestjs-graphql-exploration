import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PetInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    family?: string;
}