import { saveAs } from 'file-saver'

const API_BASE_URL = 'https://localhost:3000/schedule';

export const fetchStructuredSchedule = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/structured`);
        if (!response.ok) {
            throw new Error('HTTP error, status: ' + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching: ' + error.message);
        throw error;
    }
};

// Функция для сохранения данных в JSON-файл
export const saveScheduleToFile = (data, filename = 'structuredSchedule.json') => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
    });
    saveAs(blob, filename);
};

// Пример использования
export const fetchAndSaveSchedule = async () => {
    try {
        const scheduleData = await fetchStructuredSchedule();
        if (scheduleData.success) {
            saveScheduleToFile(scheduleData.data);
            console.log('Schedule saved to file!');
        } else {
            console.error('Failed to fetch schedule:', scheduleData.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};