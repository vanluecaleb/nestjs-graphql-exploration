import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Pet } from 'src/pets/entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner, Pet])],
  providers: [OwnersResolver, OwnersService],
})
export class OwnersModule {}
