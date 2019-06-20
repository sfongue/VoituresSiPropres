import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { POST_MODEL_PROVIDER } from '../constants';

@Injectable()
export class RolesService {
  constructor(@Inject(POST_MODEL_PROVIDER) private readonly roleModel: Model<Role>) { }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return await createdRole.save();
  }

  async findAll(): Promise<Role[]> {
    return await this.roleModel.find().exec();
  }
}