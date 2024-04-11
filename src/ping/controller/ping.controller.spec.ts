import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from './ping.controller';
import { PingService } from '../service/ping.service';

describe('AppController', () => {
  let appController: PingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();

    appController = app.get<PingController>(PingController);
  });

  describe('root', () => {
    it('should return "pong"', () => {
      expect(appController.getPing()).toBe('pong');
    });
  });
});
