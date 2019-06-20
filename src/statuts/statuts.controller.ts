import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CreateStatutDto } from './dto/create-statut.dto';
import { StatutsService } from './statuts.service';
import { Statut as StatutInterface } from './interfaces/statut.interface';

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

    // @Delete()
    // async deleteItem(id): Promise<PostInterface[]> {
    //     return "ok";
    // }
}