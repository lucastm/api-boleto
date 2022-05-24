import { Test, TestingModule } from '@nestjs/testing';
import { BoletosController } from './boletos.controller';
import { BoletosService } from './boletos.service';

describe('BoletosController', () => {
  let controller: BoletosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoletosController],
      providers: [BoletosService],
    }).compile();

    controller = module.get<BoletosController>(BoletosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
