import { fetchAndSaveSchedule } from "../../Entities/schedule/api/scheduleService.js";
import s from './schedule.module.scss'
//import PropTypes from "prop-types";

export const SchedulePage = () => {

    const handleFetchAndSaveSchedule = async () => {
        try {
            await fetchAndSaveSchedule();
            alert('Расписание успешно сохранено');
        } catch (error) {
            alert('Ошибка при сохранении расписания: ' + error.message);
        }
    };

    return (
        <div className={s['schedulePage']}>

        </div>
    );
};
