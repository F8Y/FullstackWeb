import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [HttpModule], // Модуль
  controllers: [ScheduleController], // Регистрация контроллера
  providers: [ScheduleService], // Регистрация сервиса
})
export class ScheduleModule {}
