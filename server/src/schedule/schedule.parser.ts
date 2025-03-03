import { parseISO, getISOWeek } from 'date-fns';

export interface SimplifiedPair {
  courseType: string;
  courseSubject: string;
  teachers: string[];
  beginsAt: string;
  endsAt: string;
  studyPlace: string;
}

export interface StructuredSchedule {
  [day: string]: {
    numerator: SimplifiedPair[]; // Пары числителя
    denominator: SimplifiedPair[]; // Пары знаменателя
  };
}

export const parseSchedule = (scheduleData: any): StructuredSchedule => {
  const structuredSchedule: StructuredSchedule = {
    Monday: { numerator: [], denominator: [] },
    Tuesday: { numerator: [], denominator: [] },
    Wednesday: { numerator: [], denominator: [] },
    Thursday: { numerator: [], denominator: [] },
    Friday: { numerator: [], denominator: [] },
    Saturday: { numerator: [], denominator: [] },
    Sunday: { numerator: [], denominator: [] },
  };

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  scheduleData.forEach((week: any[], weekIndex: number) => {
    week.forEach((day: any[], dayIndex: number) => {
      day.forEach((pair: any) => {
        const date = parseISO(pair.BeginsAt);
        const weekNumber = getISOWeek(date);
        const weekType = weekNumber % 2 === 0 ? 'numerator' : 'denominator';

        const simplifiedPair: SimplifiedPair = {
          courseType: pair.CourseType.Name,
          courseSubject: pair.CourseSubject.Name,
          teachers: pair.TeacherList.map((teacher: any) => teacher.Name),
          beginsAt: pair.BeginsAt,
          endsAt: pair.EndsAt,
          studyPlace: pair.StudyPlace.Name,
        };

        const dayName = days[dayIndex];
        structuredSchedule[dayName][weekType].push(simplifiedPair);
      });
    });
  });

  return structuredSchedule;
};
