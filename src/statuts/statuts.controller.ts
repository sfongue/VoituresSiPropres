import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CreateStatutDto } from './dto/create-statut.dto';
import { StatutsService } from './statuts.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Statut as StatutInterface } from './interfaces/statut.interface';

@ApiUseTags('statuts')
@Controller('statuts')
export class StatutsController {
    constructor(private readonly statutsService: StatutsService) { }

    @Post()
    async create(@Body() createStatutDto: CreateStatutDto) {
      this.statutsService.create(createStatutDto);
    }

    @Get()
    async findAll(): Promise<StatutInterface[]> {
      return this.statutsService.findAll();
    }

	@Get(':id')
    async getStatut(@Param('id') id: string) {
      return this.statutsService.getStatut(id);
    } 

    @Put(':id')
    async updateStatut(@Param('id') id: string, @Param('statut') statut: Object) {
      return this.statutsService.updateStatut(id, statut);
    }

    @Delete(':id')
    async deleteStatut(@Param('id') id: string) {
      return this.statutsService.deleteStatut(id);
    }
}
