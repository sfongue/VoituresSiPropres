import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { Utilisateur as UtilisateurInterface } from './interfaces/utilisateur.interface';

@ApiUseTags('utilisateurs')
@Controller('utilisateurs')
export class UtilisateursController {
    constructor(private readonly utilisateursService: UtilisateursService) { }

    @Post()
    async create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
      this.utilisateursService.create(createUtilisateurDto);
    }

    @Get()
    async findAll(): Promise<UtilisateurInterface[]> {
      return this.utilisateursService.findAll();
    }
}
