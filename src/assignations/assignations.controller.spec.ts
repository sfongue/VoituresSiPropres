import { Test, TestingModule } from '@nestjs/testing';
import { AssignationsController } from './assignations.controller';

describe('Assignations Controller', () => {
  let controller: AssignationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignationsController],
    }).compile();

    controller = module.get<AssignationsController>(AssignationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
