import { Test, TestingModule } from '@nestjs/testing';
import { PortefeuillesController } from './portefeuilles.controller';

describe('Portefeuilles Controller', () => {
  let controller: PortefeuillesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortefeuillesController],
    }).compile();

    controller = module.get<PortefeuillesController>(PortefeuillesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
