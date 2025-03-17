
export const normalizeType = (type) => {
    if (!type) return type;

    const lower= type.trim().toLowerCase();

    if (lower === 'лекции' || lower === 'лекция' || lower === 'лекц') {
        return 'Лекция';
    }

    if (lower === 'практика' || lower === 'практические' || lower === 'практические занятия'){
        return 'Практика';
    }

    if (lower === 'лаб' || lower === 'лабораторная' || lower === 'лабораторные работы' || lower === 'лабораторная работа'){
        return 'Лабораторные работы'
    }

    return type.trim();
}