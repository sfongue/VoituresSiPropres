import { Controller, Get, Post, Body, Put, Delete, Param, Query } from '@nestjs/common';
import { CreateAnomalieDto } from './dto/create-anomalie.dto';
import { AnomaliesService } from './anomalies.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Anomalie as AnomalieInterface } from './interfaces/anomalie.interface';

@ApiUseTags('anomalies')
@Controller('anomalies')
export class AnomaliesController {
    constructor(private readonly anomaliesService: AnomaliesService) { }

    @Post()
    async create(@Body() createAnomalieDto: CreateAnomalieDto) {
      this.anomaliesService.create(createAnomalieDto);
    }

    @Get()
    async findAll(): Promise<AnomalieInterface[]> {
      return this.anomaliesService.findAll();
    }

    @Get(':id')
    async getAnomalie(@Param('id') id: number) {
      return this.anomaliesService.getAnomalie(id);
    } 

    @Put(':id')
    async updateAnomalie(@Param('id') id: number, @Param('anomalie') anomalie: Object) {
      return this.anomaliesService.updateAnomalie(id, anomalie);
    }

    @Delete(':id')
    async deleteAnomalie(@Param('id') id: number) {
      return this.anomaliesService.deleteAnomalie(id);
    }
}
