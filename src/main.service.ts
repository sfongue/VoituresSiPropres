import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

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
}