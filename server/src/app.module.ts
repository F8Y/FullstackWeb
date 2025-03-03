import { Module } from '@nestjs/common';
import { ScheduleModule } from './schedule/schedule.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
