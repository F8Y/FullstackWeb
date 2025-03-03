import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { writeFile, readFile } from 'fs/promises';
import { catchError, firstValueFrom } from 'rxjs';
import { parseSchedule, StructuredSchedule } from './schedule.parser';

@Injectable()
export class ScheduleService {
  constructor(private readonly httpService: HttpService) {}

  async fetchAndSaveSchedule() {
    const url =
      'https://dvgups.ru/index.php?Itemid=1246&option=com_timetable&view=newtimetable';

    const data = new URLSearchParams({
      GroupID: '54314',
      APIkeklolorbidol: 'askdfhjgbklscdjbnfhgalsjkdtg',
    }).toString();

    try {
      const response = await firstValueFrom(
        this.httpService
          .post(url, data, {
            headers: {
              'accept': '*/*',
              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'x-requested-with': 'XMLHttpRequest',
            },
          })
          .pipe(
            catchError((error) => {
              throw new Error('HTTP error: ', error);
            }),
          ),
      );

      console.log('API response received:', !!response.data);

      await writeFile(
        '/Users/f8y/WebstormProjects/untitled/server/data/schedule.json',
        JSON.stringify(response.data, null, 2),
      );
      return { success: true, message: 'File successfully saved' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async getStructuredSchedule(): Promise<{ success: boolean; data?: StructuredSchedule; message?: string }> {
    try {
      const filePath =
        '/Users/f8y/WebstormProjects/untitled/server/data/schedule.json';
      const rawData = await readFile(filePath, 'utf-8');
      const scheduleData = JSON.parse(rawData);

      const structuredSchedule = parseSchedule(scheduleData);

      return {
        success: true,
        data: structuredSchedule,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to parse schedule: ' + error.message,
      };
    }
  }
}
