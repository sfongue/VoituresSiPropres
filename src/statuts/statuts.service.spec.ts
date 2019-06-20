import { Test, TestingModule } from '@nestjs/testing';
import { StatutsService } from './statuts.service';

describe('StatutsService', () => {
  let service: StatutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatutsService],
    }).compile();

    service = module.get<StatutsService>(StatutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
