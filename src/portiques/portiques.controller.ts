import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreatePortiqueDto } from './dto/create-portique.dto';
import { PortiquesService } from './portiques.service';
import { Portique as PortiqueInterface } from './interfaces/portiques.interface';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('portiques')
@Controller('portiques')
export class PortiquesController {
    constructor(private readonly portiquesService: PortiquesService) { }

    @Post()
    async create(@Body() createPortiqueDto: CreatePortiqueDto) {
      this.portiquesService.create(createPortiqueDto);
    }

    @Get()
    async findAll(): Promise<PortiqueInterface[]> {
      return this.portiquesService.findAll();
	}

	@Get(':id')
    async getPortique(@Param('id') id: string) {
      return this.portiquesService.getPortique(id);
    } 

    @Put(':id')
    async updatePortique(@Param('id') id: string, @Body() portique: CreatePortiqueDto) {
      return this.portiquesService.updatePortique(id, portique);
    }

    @Delete(':id')
    async deletePortique(@Param('id') id: string) {
      return this.portiquesService.deletePortique(id);
    }
}
