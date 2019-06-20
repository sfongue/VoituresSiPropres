import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TypeEvenementsService } from './type-evenements.service';
import { CreateTypeEvenementDto } from './dto/create-type-evenement.dto';
import { TypeEvenement as TypeEvenementInterface } from './interfaces/type-evenement.interface';

@ApiUseTags('type-evenements')
@Controller('type-evenements')
export class TypeEvenementsController {
	constructor(private readonly portiquesService: TypeEvenementsService) { }

    @Post()
    async create(@Body() createPortiqueDto: CreateTypeEvenementDto) {
      this.portiquesService.create(createPortiqueDto);
    }

    @Get()
    async findAll(): Promise<TypeEvenementInterface[]> {
      return this.portiquesService.findAll();
    }
}
