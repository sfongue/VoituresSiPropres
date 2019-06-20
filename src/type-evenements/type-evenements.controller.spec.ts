import { Test, TestingModule } from '@nestjs/testing';
import { TypeEvenementsController } from './type-evenements.controller';

describe('TypeEvenements Controller', () => {
  let controller: TypeEvenementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeEvenementsController],
    }).compile();

    controller = module.get<TypeEvenementsController>(TypeEvenementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
