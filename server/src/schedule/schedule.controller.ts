import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get() // Обработчик для GET /schedule
  getHello() {
    return 'Hello from Schedule!';
  }

  @Get('save')
  async getSchedule() {
    return this.scheduleService.fetchAndSaveSchedule();
  }

  @Get('structured')
  async getStructuredSchedule() {
    return this.scheduleService.getStructuredSchedule();
  }
}
