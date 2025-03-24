// contentBlock.jsx
import s from './contentBlock.module.scss';
import programmingData from '../../programming.json';
import PropTypes from 'prop-types';

export const ContentBlock = ({ category, language }) => {
    // Пытаемся получить данные категории
    const categoryData = programmingData.data[category];
    if (!categoryData) {
        return <div>Нет данных для категории "{category}"</div>;
    }

    // Получаем массив блоков по выбранному языку
    const contentBlocks = categoryData[language];
    if (!contentBlocks) {
        return <div>Контент для "{language}" в категории "{category}" отсутствует</div>;
    }

    return (
        <div className={s['contentBlock']}>
            {contentBlocks.map((block, index) => (
                <div key={index} className={s['contentBlock__block']}>
                    <h2>{block.title}</h2>
                    <h3>{block.subtitle}</h3>
                    <p>{block.description}</p>
                    {block.image && <img src={block.image} alt={block.title} />}

                    {block.content && block.content.map((item, idx) => (
                        <div key={idx} className={s['contentBlock__block--content']}>
                            {item.paragraph && <p>{item.paragraph}</p>}
                            {item.resourceName && item.url && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.resourceName}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

ContentBlock.propTypes = {
    category: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
};
