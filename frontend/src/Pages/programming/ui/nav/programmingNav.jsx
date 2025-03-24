// programmingNav.jsx
import s from './programmingNav.module.scss';
import { Dropdown, ButtonToolbar } from "rsuite";
import { navData } from "./navData.js";

/**
 * Соответствие "человекочитаемых" заголовков и ключей в JSON.
 * Важно, чтобы названия точно совпадали с тем, что в navData.
 */
const categoryMap = {
    'Web programming': 'webProgramming',
    'Object-oriented programming': 'ObjectOrientedProgramming',
    'Data analyzing': 'DataAnalyzing',
    'Mobile programming': 'MobileProgramming'
};

/**
 * Иногда в navData встречается "FrameWorks",
 * а в JSON — "Frameworks" (без заглавной 'W').
 * Подобные расхождения тоже стоит учесть.
 */
const languageMap = {
    'FrameWorks': 'Frameworks'
};

export const ProgrammingNav = ({ onSelect, className }) => (
    <div className={s['programming']}>
        <nav className={s['programming__nav']}>
            <ButtonToolbar className={s['programming__nav--bar']}>
                {navData.map(({ title, items }, index) => {
                    // Сопоставляем человекочитаемый title с ключом категории в JSON
                    const categoryKey = categoryMap[title];

                    return (
                        <div className={s['programming__dropdown-container']} key={index}>
                            <Dropdown
                                title={title}
                                size="lg"
                                appearance="default"
                                className={s['programming__dropdown']}
                            >
                                {items.map((item, idx) => {
                                    // Если язык в navData называется "FrameWorks",
                                    // сопоставим его с "Frameworks" в JSON.
                                    const normalizedItem = languageMap[item] || item;

                                    return (
                                        <Dropdown.Item
                                            key={idx}
                                            className={s['programming__dropdown-item']}
                                            // По клику (onSelect) вызываем колбэк, передавая
                                            // ключ категории и реальное название языка
                                            onSelect={() => onSelect(categoryKey, normalizedItem)}
                                        >
                                            {item}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown>
                        </div>
                    );
                })}
            </ButtonToolbar>
            <hr />
        </nav>
    </div>
);
