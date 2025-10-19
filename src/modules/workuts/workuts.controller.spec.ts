import { Test, TestingModule } from '@nestjs/testing';
import { WorkutsController } from './workuts.controller';

describe('WorkutsController', () => {
  let controller: WorkutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkutsController],
    }).compile();

    controller = module.get<WorkutsController>(WorkutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
