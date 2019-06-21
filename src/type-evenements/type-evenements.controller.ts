import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { TypeEvenementsService } from './type-evenements.service';
import { CreateTypeEvenementDto } from './dto/create-type-evenement.dto';
import { TypeEvenement as TypeEvenementInterface } from './interfaces/type-evenement.interface';

@ApiUseTags('type-evenements')
@Controller('type-evenements')
export class TypeEvenementsController {
	constructor(private readonly typeEvenementsService: TypeEvenementsService) { }

    @Post()
    async create(@Body() createPortiqueDto: CreateTypeEvenementDto) {
      this.typeEvenementsService.create(createPortiqueDto);
    }

    @Get()
    async findAll(): Promise<TypeEvenementInterface[]> {
      return this.typeEvenementsService.findAll();
	}
	
	@Get(':id')
    async getTypeEvenement(@Param('id') id: string) {
      return this.typeEvenementsService.getTypeEvenement(id);
    } 

    @Put(':id')
    async updateTypeEvenement(@Param('id') id: string, @Param('type_evenement') typeEvenement: Object) {
      return this.typeEvenementsService.updateTypeEvenement(id, typeEvenement);
    }

    @Delete(':id')
    async deleteTypeEvenement(@Param('id') id: string) {
      return this.typeEvenementsService.deleteTypeEvenement(id);
    }
}
