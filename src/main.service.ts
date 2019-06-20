import { Model } from 'mongoose';
import { Param } from '@nestjs/common';

export class MainService<M, DTO> {
  constructor(
    private readonly modelM: Model<any>) { }
  
  async create(dto: DTO): Promise<M> {
    const created = new this.modelM(dto);
    return await created.save();
  }

  async findAll(): Promise<M[]> {
    return await this.modelM.find().exec();
  }

  // Ne fonctionne pas car l'id ne passe pas en paramètre dans l'url
  // async findById(@Param('id') id: number): Promise<M[]> {
  //   return await this.modelM.findById(id).exec();
  // }
}