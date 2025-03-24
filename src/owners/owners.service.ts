import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private readonly ownerRepository: Repository<Owner>) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return this.ownerRepository.save(newOwner);
  }

  findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({ relations: { pets: true } });
  }

  async findOne(id: number): Promise<Owner> {
    const owner = await this.ownerRepository.findOne({ 
      where: {
        id: id
      },
      relations: {
        pets: true
      }
     });
     if (!owner) throw new NotFoundException(`Owner not found by id ${id}`);
     return owner
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput): void {
    this.ownerRepository.update({ id: id }, updateOwnerInput);
  }

  remove(id: number) {
    this.ownerRepository.delete({ id: id });
  }
}
