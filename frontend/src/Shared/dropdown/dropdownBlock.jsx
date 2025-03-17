import s from './dropdownBlock.module.scss';
import { useState } from "react";
import PropTypes from "prop-types";

export const DropdownBlock = ({ pair, customParagraph, headerText, customNumber }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    // Если передан объект pair, используем его для формирования заголовка
    const headerContent = pair ? (
        <>
            <span className={s['dropdownBlock__header--number']}>
                {pair.pairNumber < 10 ? `0${pair.pairNumber}` : pair.pairNumber}
            </span>
            <span>{pair.subject}</span>
        </>
    ) : (
        // Если pair не передан, можно вывести какой-либо дефолтный заголовок или использовать customText
        <>
        <span className={s['dropdownBlock__header--number']}>
            {customNumber < 10 ? `0${customNumber}` : customNumber}
        </span>
            <span>{headerText}</span>
        </>
    );

    return (
        <div className={s.dropdownBlock}>
            <div className={s.dropdownBlock__header} onClick={toggleOpen}>
                {headerContent}
            </div>

            {open && (
                <div className={s.dropdownBlock__items}>
                    {pair ? (
                        <>
                            <p><strong>Время:</strong> {pair.time || "-"}</p>
                            <p><strong>Преподаватель:</strong> {pair.teacher || "-"}</p>
                            <p><strong>Аудитория:</strong> {pair.room || "-"}</p>
                            <p><strong>{pair.type || "-"}</strong></p>
                        </>
                    ) : (
                        // Если объект pair не передан, отобразим либо customText, либо children
                        <p>{customParagraph || 'Что-то пошло не так'}</p>
                    )}
                </div>
            )}
        </div>
    );
};

DropdownBlock.propTypes = {
    pair: PropTypes.object,
    customParagraph: PropTypes.string,
    headerText: PropTypes.string,
    customNumber: PropTypes.number,
};
