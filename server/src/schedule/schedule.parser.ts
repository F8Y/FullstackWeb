import { parseISO, getISOWeek, format, getDay } from 'date-fns';

export interface Pair {
  pairNumber: number;
  type: string;      // тип занятия (Лекции, Практика, Лабораторные и т.д.)
  subject: string;   // название предмета
  teacher: string;   // преподаватель
  room: string;      // аудитория
  time: string;      // временной слот (например, "8:05 - 9:35")
}

export interface DaySchedule {
  numerator: Pair[];
  denominator: Pair[];
  // Дополнительно можно добавить консультации, если потребуется:
  consultations?: Pair[];
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

// Фиксированные временные слоты
const fixedTime = [
  '8:05 - 9:35',
  '9:50 - 11:20',
  '11:35 - 13:05',
  '13:35 - 15:05',
  '15:15 - 16:45',
  '16:55 - 18:25',
];

// Шаблоны по умолчанию для числителя и знаменателя
const defaultTemplates = {
  numerator: {
    Monday: [
      /* 1 пара отсутствует */
      { pairNumber: 2, type: 'Лекции', subject: 'Правоведение', teacher: 'Стрелкова Елена Викторовна', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Лекции', subject: 'Системы искусственного интеллекта', teacher: 'Ланец Сергей Андреевич', room: '', time: fixedTime[2] },
      { pairNumber: 4, type: 'Практика', subject: 'Системы искусственного интеллекта', teacher: 'Ланец Сергей Андреевич', room: '', time: fixedTime[3] },
    ],
    Tuesday: [
      { pairNumber: 1, type: 'Лекции', subject: 'Проектирование и разработка пользовательских интерфейсов', teacher: 'Исаев Михаил Сергеевич', room: '', time: fixedTime[0] },
      { pairNumber: 2, type: 'Лабораторные работы', subject: 'Проектирование и разработка пользовательских интерфейсов', teacher: 'Исаев Михаил Сергеевич', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Лекции', subject: 'Математическое и имитационное моделирование', teacher: 'Рукавишников Алексей Викторович', room: '', time: fixedTime[2] },
      { pairNumber: 4, type: 'Практика', subject: 'Математическое и имитационное моделирование', teacher: 'Рукавишников Алексей Викторович', room: '', time: fixedTime[3] },
      { pairNumber: 5, type: 'Практика', subject: 'Элективные курсы по физической культуре и спорту', teacher: '', room: '', time: fixedTime[4] },
    ],
    Wednesday: Array(5).fill(null).map((_, i) => ({
      pairNumber: i + 1,
      type: 'Практика',
      subject: 'Военная подготовка',
      teacher: '',
      room: i === 0 ? 'Учебный военный центр' : 'Учебный военный центр',
      time: fixedTime[i],
    })),
    Thursday: [
      { pairNumber: 1, type: 'Практика', subject: 'Web-программирование', teacher: 'Гладкий Данила Витальевич', room: '', time: fixedTime[0] },
      { pairNumber: 2, type: 'Лекции', subject: 'Философия виртуальной реальности и искусственного интеллекта', teacher: 'Рудецкий Олег Андреевич', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Практика', subject: 'Элективные курсы по физической культуре и спорту', teacher: '', room: '', time: fixedTime[2] },
      { pairNumber: 4, type: 'Практика', subject: 'Системы искусственного интеллекта', teacher: 'Ланец Сергей Андреевич', room: '', time: fixedTime[3] },
    ],
    Friday: [
      { pairNumber: 1, type: 'Практика', subject: 'Web-программирование', teacher: 'Гладкий Данила Витальевич', room: '', time: fixedTime[0] },
      { pairNumber: 2, type: 'Практика', subject: 'Философия виртуальной реальности и искусственного интеллекта', teacher: 'Подкорытова Владислава Александровна', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Практика', subject: 'Правоведение', teacher: 'Стрелкова Елена Викторовна', room: '', time: fixedTime[2] },
    ],
    Saturday: [],
    Sunday: [],
  },
  denominator: {
    Monday: [
      { pairNumber: 2, type: 'Лекции', subject: 'Правоведение', teacher: 'Стрелкова Елена Викторовна', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Лекции', subject: 'Web-программирование', teacher: 'Исаев Михаил Сергеевич', room: '', time: fixedTime[2] },
    ],
    Tuesday: [
      { pairNumber: 1, type: 'Практика', subject: 'Проектирование и разработка пользовательских интерфейсов', teacher: 'Исаев Михаил Сергеевич', room: '', time: fixedTime[0] },
      { pairNumber: 2, type: 'Лабораторные работы', subject: 'Проектирование и разработка пользовательских интерфейсов', teacher: 'Исаев Михаил Сергеевич', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Лекции', subject: 'Математическое и имитационное моделирование', teacher: 'Рукавишников Алексей Викторович', room: '', time: fixedTime[2] },
      { pairNumber: 4, type: 'Практика', subject: 'Математическое и имитационное моделирование', teacher: 'Рукавишников Алексей Викторович', room: '', time: fixedTime[3] },
    ],
    Wednesday: Array(5).fill(null).map((_, i) => ({
      pairNumber: i + 1,
      type: 'Практика',
      subject: 'Военная подготовка',
      teacher: '',
      room: 'Учебный военный центр',
      time: fixedTime[i],
    })),
    Thursday: [
      { pairNumber: 1, type: 'Практика', subject: 'Web-программирование', teacher: 'Гладкий Данила Витальевич', room: '', time: fixedTime[0] },
      { pairNumber: 2, type: 'Лекции', subject: 'Философия виртуальной реальности и искусственного интеллекта', teacher: 'Рудецкий Олег Андреевич', room: '', time: fixedTime[1] },
      { pairNumber: 3, type: 'Практика', subject: 'Элективные курсы по физической культуре и спорту', teacher: '', room: '', time: fixedTime[2] },
      { pairNumber: 4, type: 'Практика', subject: 'Системы искусственного интеллекта', teacher: 'Ланец Сергей Андреевич', room: '', time: fixedTime[3] },
    ],
    Friday: [],
    Saturday: [],
    Sunday: [],
  }
};

// Функция глубокого клонирования шаблона
function cloneTemplate<T>(template: T): T {
  return JSON.parse(JSON.stringify(template));
}

// Инициализация итогового расписания на неделю
function initializeSchedule(): StructuredSchedule {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const schedule: StructuredSchedule = {
    Monday: { numerator: [], denominator: [] },
    Tuesday: { numerator: [], denominator: [] },
    Wednesday: { numerator: [], denominator: [] },
    Thursday: { numerator: [], denominator: [] },
    Friday: { numerator: [], denominator: [] },
    Saturday: { numerator: [], denominator: [] },
    Sunday: { numerator: [], denominator: [] },
  };

  days.forEach(day => {
    schedule[day].numerator = cloneTemplate(defaultTemplates.numerator[day] || []);
    schedule[day].denominator = cloneTemplate(defaultTemplates.denominator[day] || []);
    // Если нужно, можно инициализировать консультации как пустой массив:
    schedule[day].consultations = [];
  });

  return schedule;
}

// Функция для определения номера пары по времени начала
function getSlotIndex(startTime: string): number {
  const [hours, minutes] = startTime.split(':');
  const formattedStart = `${+hours}:${minutes}`;
  return fixedTime.findIndex(slot => slot.startsWith(formattedStart));
}

// Новая функция парсинга, которая обновляет стандартное расписание данными из API
export const parseSchedule = (apiData: any[]): StructuredSchedule => {
  const schedule = initializeSchedule();
  // apiData – это массив недель, где каждая неделя – массив дней
  apiData.forEach(week => {
    week.forEach((dayData: any[], dayIndex: number) => {
      // Определяем имя дня по индексу (0 – Monday, 6 – Sunday)
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const dayName = days[dayIndex];
      dayData.forEach((lesson: any) => {
        const date = parseISO(lesson.BeginsAt);
        // Определяем тип недели: используем правило (например, если ISO week % 2 === 0, то числитель, иначе знаменатель)
        const weekNumber = getISOWeek(date);
        const weekType: 'numerator' | 'denominator' = (weekNumber % 2 === 0) ? 'numerator' : 'denominator';

        // Определяем слот по времени начала
        const startTime = format(date, 'H:mm');
        let slotIndex = getSlotIndex(startTime);
        if (slotIndex === -1) {
          // Если время не соответствует ни одному фиксированному слоту, можно использовать порядковый номер урока
          slotIndex = 0;
        }
        const pairNumber = slotIndex + 1;

        // Извлекаем данные из API (с обнулением пробелов)
        const teacher = (lesson.TeacherList && lesson.TeacherList.length > 0 && lesson.TeacherList[0].Name.trim()) || '';
        const room = (lesson.StudyPlace && lesson.StudyPlace.Name && lesson.StudyPlace.Name.trim()) || '';
        const subject = (lesson.CourseSubject && lesson.CourseSubject.Name.trim()) || '';
        const type = (lesson.CourseType && lesson.CourseType.Name.trim()) || '';

        // Формируем объект пары
        const apiPair: Pair = {
          pairNumber,
          type,
          subject,
          teacher,
          room,
          time: fixedTime[slotIndex] || '',
        };

        // Логика обновления:
        // Если данные из API содержат существенную информацию (например, teacher или room не пусты),
        // то обновляем соответствующий слот в шаблоне.
        if (teacher || room) {
          const target = schedule[dayName][weekType];
          // Найдём индекс записи по номеру пары в шаблоне
          const index = target.findIndex(pair => pair.pairNumber === pairNumber);
          if (index !== -1) {
            // Обновляем существующую запись – заменяем только если API предоставляет ненулевые значения
            target[index] = {
              ...target[index],
              type: type || target[index].type,
              subject: subject || target[index].subject,
              teacher: teacher || target[index].teacher,
              room: room || target[index].room,
              time: fixedTime[slotIndex] || target[index].time,
            };
          } else {
            // Если записи нет (например, консультация или дополнительное занятие), добавляем её
            target.push(apiPair);
            target.sort((a, b) => a.pairNumber - b.pairNumber);
          }
        } else {
          // Если данные из API практически пустые (например, пустой teacher и room), можно не обновлять дефолт
          // или, если требуется, добавить как консультацию:
          if (dayName !== 'Sunday') {
            schedule[dayName].consultations?.push(apiPair);
          }
        }
      });
    });
  });

  // Фильтруем итоговое расписание: убираем «пустые» пары (если, например, в записи присутствует только subject, а остальные поля пустые)
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days.forEach(day => {
    ['numerator', 'denominator'].forEach((weekType: 'numerator' | 'denominator') => {
      schedule[day][weekType] = schedule[day][weekType].filter(pair => {
        // Если хотя бы одно из полей teacher или room заполнено, или если пара относится к консультациям – оставляем
        return pair.teacher.trim() !== '' || pair.room.trim() !== '';
      });
    });
    // Если консультации пустые, удаляем свойство (необязательно)
    if (schedule[day].consultations && schedule[day].consultations.length === 0) {
      delete schedule[day].consultations;
    }
  });

  return schedule;
};
