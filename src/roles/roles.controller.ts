import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role as RoleInterface } from './interfaces/role.interface';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }

    @Post()
    async create(@Body() createRoleDto: CreateRoleDto) {
      this.rolesService.create(createRoleDto);
    }

    @Get()
    async findAll(): Promise<RoleInterface[]> {
      return this.rolesService.findAll();
    }

    // @Delete()
    // async deleteItem(id): Promise<PostInterface[]> {
    //     return "ok";
    // }
}