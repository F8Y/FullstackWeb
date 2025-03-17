import {normalizeType} from "./normalizeType.js";

export function mergePairsByNumberAndSubject(pairs) {
    const normalizedPairs = pairs.map(pair => ({
        ...pair,
        type: normalizeType(pair.type),
    }));

    const grouped = {};
    normalizedPairs.forEach(pair => {
        const key = `${pair.pairNumber}::${pair.subject}::${pair.type}`;
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(pair);
    });

    // Сливаем поля в каждой группе
    return Object.values(grouped).map(group => {
        if (group.length === 1) {
            return group[0];
        } else {
            return group.reduce((acc, item) => ({
                pairNumber: acc.pairNumber || item.pairNumber,
                subject: acc.subject || item.subject,
                time: acc.time || item.time,
                teacher: acc.teacher || item.teacher,
                room: acc.room || item.room,
                type: acc.type || item.type,
            }), {});
        }
    });
}
