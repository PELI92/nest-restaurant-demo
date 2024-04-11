import { PingService } from './ping.service';

describe('PingService', () => {
  let service: PingService;

  beforeEach(() => {
    service = new PingService();
  });

  describe('getPing', () => {
    it('should return "pong"', () => {
      expect(service.getPing()).toBe('pong');
    });
  });
});
