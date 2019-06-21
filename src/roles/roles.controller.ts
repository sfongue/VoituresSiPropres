import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role as RoleInterface } from './interfaces/role.interface';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('roles')
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

	@Get(':id')
    async getRole(@Param('id') id: string) {
      return this.rolesService.getRole(id);
    }

    @Put(':id')
    async updateRole(@Param('id') id: string, @Body() role: CreateRoleDto) {
      return this.rolesService.updateRole(id, role);
    }

    @Delete(':id')
    async deleteRole(@Param('id') id: string) {
      return this.rolesService.deleteRole(id);
    }
}