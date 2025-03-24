import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { PetInput } from './dto/pet-input.dto';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petsService: PetsService) {}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]> {
        return this.petsService.getAllPets();
    }

    @Mutation(returns => Pet)
    createPet(@Args('petInput') petInput: PetInput): Promise<Pet> {
        return this.petsService.createPet(petInput);
    }
}
