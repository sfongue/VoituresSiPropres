import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CreatePortefeuilleDto } from './dto/create-portefeuille.dto';
import { PortefeuillesService } from './portefeuilles.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Portefeuille as PortefeuilleInterface } from './interfaces/portefeuille.interface';

@ApiUseTags('portefeuilles')
@Controller('portefeuilles')
export class PortefeuillesController {
    constructor(private readonly portefeuillesService: PortefeuillesService) { }

    @Post()
    async create(@Body() createPortefeuilleDto: CreatePortefeuilleDto) {
      this.portefeuillesService.create(createPortefeuilleDto);
    }

    @Get()
    async findAll(): Promise<PortefeuilleInterface[]> {
      return this.portefeuillesService.findAll();
	}

	@Get(':id')
    async getPortefeuille(@Param('id') id: string) {
      return this.portefeuillesService.getPortefeuille(id);
    } 

    @Put(':id')
    async updatePortefeuille(@Param('id') id: string, @Param('portefeuille') portefeuille: Object) {
      return this.portefeuillesService.updatePortefeuille(id, portefeuille);
    }

    @Delete(':id')
    async deletePortefeuille(@Param('id') id: string) {
      return this.portefeuillesService.deletePortefeuille(id);
    }
}
