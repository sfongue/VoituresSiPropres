import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CreateAssignationDto } from './dto/create-assignation.dto';
import { AssignationsService } from './assignations.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Assignation as AssignationInterface } from './interfaces/assignation.interface';

@ApiUseTags('assignations')
@Controller('assignations')
export class AssignationsController {
    constructor(private readonly assignationsService: AssignationsService) { }

    @Post()
    async create(@Body() createAssignationDto: CreateAssignationDto) {
      this.assignationsService.create(createAssignationDto);
    }

    @Get()
    async findAll(): Promise<AssignationInterface[]> {
      return this.assignationsService.findAll();
    }
}
