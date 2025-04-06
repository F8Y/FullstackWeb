import {useEffect, useState} from 'react';
import s from './infPage.module.scss'
import programmingData from '../../programming.json'
import {useLocation} from "react-router-dom";

export const InfPage = () => {

    const location = useLocation();
    const language = location.state?.language || 'defaultValue';
    const itemKey = location.state?.key;


    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (!itemKey) {
                setError('Ключ элемента не был передан')
                setLoading(false);
            }

            let foundContent = null;

            Object.keys(programmingData.data).forEach(category => {
                const categoryData = programmingData.data[category];

                if (categoryData[language]) {
                    const foundItem = categoryData[language].find(item => item.key === itemKey);

                    if (foundItem) {
                        foundContent = foundItem;
                    }
                }
            });

            if (foundContent) {
                setContent(foundContent);
            } else {
                setError(`Не удалось найти контент для ${itemKey}`);
            }

        } catch (err) {
            setError('Ошибка при загрузке данных');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [language, itemKey]);

    if (loading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!content) {
        return <div>Контент отсутствует</div>
    }

    return (
        <div className={s['informationPage']}>

            <h1>{content.title}</h1>

            <div className={s['informationPage__content']}>

                <div className={s['informationPage__content__text']}>

                    <div className={s['informationPage__content__text--title']}>

                        <h2>{content.subtitle}</h2>
                        <p>{content.description}</p>

                    </div>

                    {content.content && content.content.map((item, idx) => (
                        <div key={idx}>
                            {item.paragraph && <p>{item.paragraph}</p>}
                            {item.resourceName && item.url && (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.resourceName}
                                </a>
                            )}
                        </div>
                    ))}

                </div>

                <div className={s['informationPage__content--image']}>

                    <img src={content.image} alt={undefined}/>

                </div>
            </div>
        </div>
    );
};

