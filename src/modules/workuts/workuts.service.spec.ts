import { Test, TestingModule } from '@nestjs/testing';
import { WorkutsService } from './workuts.service';

describe('WorkutsService', () => {
  let service: WorkutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkutsService],
    }).compile();

    service = module.get<WorkutsService>(WorkutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
