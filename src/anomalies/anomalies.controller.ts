import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
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
}
