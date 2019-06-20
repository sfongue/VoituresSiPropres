import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
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
}
