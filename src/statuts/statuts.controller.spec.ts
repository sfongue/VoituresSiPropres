import { Test, TestingModule } from '@nestjs/testing';
import { StatutsController } from './statuts.controller';

describe('Statuts Controller', () => {
  let controller: StatutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatutsController],
    }).compile();

    controller = module.get<StatutsController>(StatutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
