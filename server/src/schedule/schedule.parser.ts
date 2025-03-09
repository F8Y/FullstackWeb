import { parseISO, getISOWeek, format } from 'date-fns';

export interface Pair {
  pairNumber: number;
  type: string; // тип пары
  subject: string; // название предмета
  teacher: string; // преподаватель
  room: string; // аудитория
  time: string; // время в формате: 00:00 - 00:00
}

export interface DaySchedule {
  numerator: Pair[];
  denominator: Pair[];
}

export interface StructuredSchedule {
  Monday: DaySchedule;
  Tuesday: DaySchedule;
  Wednesday: DaySchedule;
  Thursday: DaySchedule;
  Friday: DaySchedule;
  Saturday: DaySchedule;
  Sunday: DaySchedule;
}

const fixedTime = [
  '8:05 - 9:35',
  '9:50 - 11:20',
  '11:35 - 13:05',
  '13:35 - 15:05',
  '15:15 - 16:45',
  '16:55 - 18:25',
];

// Шаблон расписания по умолчанию

const defaultTemplates: {
  [day: string]: {
    numerator?: Array<{ type: string; subject: string } | null>;
    denominator?: Array<{ type: string; subject: string } | null>;
  }
} = {
  Monday: {
    numerator: [
      null,
      { type: 'Лекция', subject: 'Правоведение' },
      { type: 'Лекция', subject: 'Системы искусственного интеллекта' },
      { type: 'Практика', subject: 'Системы искусственного интеллекта' },
    ],
    denominator: [
      null,
      { type: 'Лекция', subject: 'Правоведение' },
      { type: 'Лекция', subject: 'Web-программирование' },
    ]
  },
  Tuesday: {
    numerator: [
      { type: 'Лекция', subject: 'Проектирование и разработка пользовательских интерфейсов' },
      { type: 'Практика', subject: 'Проектирование и разработка пользовательских интерфейсов' },
      { type: 'Лекция', subject: 'Математическое и имитационное моделирование' },
      { type: 'Практика', subject: 'Математическое и имитационное моделирование' },
      { type: 'Элективные курсы', subject: 'по физической культуре и спорту' },
    ],
    denominator: [
      { type: 'Практика', subject: 'Проектирование и разработка пользовательских интерфейсов' },
      { type: 'Лекция', subject: 'Математическое и имитационное моделирование' },
      { type: 'Практика', subject: 'Математическое и имитационное моделирование' }
    ]
  },
  Wednesday: {
    numerator: Array(5).fill({ type: 'Практика', subject: 'Военная подготовка' }),
    denominator: Array(5).fill({ type: 'Практика', subject: 'Военная подготовка' })
  },
  Thursday: {
    numerator: [
      { type: 'Практика', subject: 'Web-программирование' },
      { type: 'Лекция', subject: 'Философия виртуальной реальности и искусственного интеллекта' },
      { type: 'Практика', subject: 'Элективные курсы по физической культуре и спорту' },
      { type: 'Практика', subject: 'Системы искусственного интеллекта' },
    ],
    denominator: [
      { type: 'Практика', subject: 'Web-программирование' },
      { type: 'Лекция', subject: 'Философия виртуальной реальности и искусственного интеллекта' },
      { type: "Практика", subject: 'Элетивные курсы по физической культуре и спорту' },
      { type: 'Практика', subject: 'Системы искусственного интеллекта' },
    ]
  },
  Friday: {
    numerator: [
      { type: 'Практика', subject: 'Web-программирование' },
      { type: "Практика", subject: 'Философия виртуальной реальности и искусственного интеллекта' },
      { type: 'Практика', subject: 'Правоведение' },
    ],
    denominator: []
  },
  Saturday: {
    numerator: [],
    denominator: []
  },
  Sunday: {
    numerator: [],
    denominator: []
  }
};

// Глубокое клонирование шаблона, чтобы сохранить исходный темплейт
function cloneTemplate(template: any){
  return template ? JSON.parse(JSON.stringify(template)) : null;
}

export const parseSchedule = (scheduleData: any): StructuredSchedule => {
  // Инициализация итоговой структуры
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const structuredSchedule: StructuredSchedule = {
    Monday: { numerator: [], denominator: [] },
    Tuesday: { numerator: [], denominator: [] },
    Wednesday: { numerator: [], denominator: [] },
    Thursday: { numerator: [], denominator: [] },
    Friday: { numerator: [], denominator: [] },
    Saturday: { numerator: [], denominator: [] },
    Sunday: { numerator: [], denominator: [] },
  };

  // Заполнение значениями по умолчанию + приведение к Pair
  days.forEach(day => {
    const defaultNum = defaultTemplates[day]?.numerator ? cloneTemplate(defaultTemplates[day].numerator) : [];
    const defaultDen = defaultTemplates[day]?.denominator ? cloneTemplate(defaultTemplates[day].denominator) : [];
    structuredSchedule[day].numerator = defaultNum.map((def: any, idx: number) => {
      if (def === null) return null;
      return {
        pairNumber: idx + 1,
        type: def.type || "",
        subject: def.subject || "",
        teacher: "",
        room: "",
        time: fixedTime[idx] || "",
      };
    }).filter(Boolean);
    structuredSchedule[day].denominator= defaultDen.map((def: any, idx: number) => {
      if (def === null) return null;
      return {
        pairNumber: idx + 1,
        type: def.type || "",
        subject: def.subject || "",
        teacher: "",
        room: "",
        time: fixedTime[idx] || "",
      };
    }).filter(Boolean);
  });

  //Обработка данных, полученных с ДВГУПСа, индекс 0 - понедельник, 6 - воскресенье
  scheduleData.forEach((week: any[]) => {
    week.forEach((dayData: any[], dayIndex: number) => {
      const dayName = days[dayIndex];
      dayData.forEach((pairData: any, pairIdx: number) => {
        const date = parseISO(pairData.BeginsAt);
        const weekNumber = getISOWeek(date);
        const weekType = (weekNumber % 2 === 0) ? 'numerator' : 'denominator';

        const startTime = format(date, 'H:mm');
        let slotIndex = fixedTime.findIndex(timeStr => {
          const [expectedStart] = timeStr.split(" - ");
          return expectedStart === startTime;
        });
        if (slotIndex === -1){
          slotIndex = pairIdx;
        }
        const pairNumber = slotIndex + 1;

        const pairObj: Pair = {
          pairNumber,
          type: pairData.CourseType?.Name || "",
          subject: pairData.CourseSubject?.Name || "",
          teacher: (pairData.TeacherList && pairData.TeacherList.length > 0) ? pairData.TeacherList[0].Name : "",
          room: pairData.StudyPlace?.Name || "",
          time: fixedTime[slotIndex] || "",
        };

        const target = structuredSchedule[dayName][weekType];
        const existingIndex = target.findIndex(p => p.pairNumber === pairNumber);
        if (existingIndex !== 1) {
          target[existingIndex] = pairObj;
        } else {
          target.push(pairObj);
          target.sort((a, b) => a.pairNumber - b.pairNumber);
        }
      });
    });
  });
  return structuredSchedule;
};