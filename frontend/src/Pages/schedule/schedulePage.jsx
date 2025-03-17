import s from './schedulePage.module.scss'
import { getScheduleData } from "../../Entities/schedule/api/scheduleApi.js";
import { useState, useEffect } from "react";
import { DropdownBlock } from "../../Shared/dropdown/dropdownBlock.jsx";
import { mergePairsByNumberAndSubject } from "../../Entities/schedule/api/mergePairService.js";

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const SchedulePage = () => {

    const [scheduleData, setScheduleData] = useState(null);
    const [dayIndex, setDayIndex] = useState(0);
    const [weekType, setWeekType] = useState('numerator');

    useEffect(() => {
        getScheduleData()
            .then((data) => {
                if (data.success) {
                    setScheduleData(data.data);
                } else {
                    console.error('Error');
                }
            })
            .catch((error) => {
                console.error('Loading schedule error:' + error.message);
            });
    }, []);

    if (!scheduleData) return <div className={s['loader']}>Loading schedule...</div>

    const currentDayName = dayNames[dayIndex];

    const currentDayData = scheduleData[currentDayName];

    if (!currentDayData) {
        return <div className={s['emptySchedule']}>Нет данных на этот день</div>;
    }

    const rawPairs = currentDayData[weekType] || [];

    const currentPairs = mergePairsByNumberAndSubject(rawPairs);

    const handlePrevDay = () => {
        setDayIndex((prev) => (prev - 1 + dayNames.length) % dayNames.length);
    }

    const handleNextDay = () => {
        setDayIndex((prev) => (prev + 1) % dayNames.length);
    }

    const toggleWeekType = () => {
        setWeekType((prev) => (prev === 'numerator' ? 'denominator' : 'numerator'));
    }

    console.log("RAW pairs:", rawPairs);
    console.log("Merged pairs:", currentPairs);

    return (
        <div className={s['schedulePage']}>
            <div className={s['schedulePage__switchingBlock']}>
                <h2>{currentDayName}</h2>
                <button onClick={handlePrevDay}>&lt;</button>
                <button onClick={handleNextDay}>&gt;</button>
            </div>

            <div className={s['schedulePage__radioBtn']}>
                <button onClick={toggleWeekType}>
                    {weekType === 'numerator' ? 'Показать знаменатель' : 'Показать числитель'}
                </button>
            </div>

            {currentPairs.length === 0 ? (
                <p>Пары отсутствуют</p>
            ) : (
                currentPairs.map((pair, index) => (
                    <DropdownBlock key={index} pair={pair} />
                ))
            )}
        </div>
    );
};
