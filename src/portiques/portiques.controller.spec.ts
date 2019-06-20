import { Test, TestingModule } from '@nestjs/testing';
import { PortiquesController } from './portiques.controller';

describe('Portiques Controller', () => {
  let controller: PortiquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortiquesController],
    }).compile();

    controller = module.get<PortiquesController>(PortiquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
