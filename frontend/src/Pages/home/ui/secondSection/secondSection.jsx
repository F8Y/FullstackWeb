import s from './secondSection.module.scss'
import PropTypes from "prop-types";

export const SecondSection = ({className}) => {
    return (
        <div className={className}>
            <section className={s['secondSection']}>
                <div className={s['secondSection__text']}>
                    <h1>ВСЕ МАТЕРИАЛЫ ПО<br/>
                        НАПРАВЛЕНИЮ <br/>
                        <span>ПРИКЛАДНАЯ ИНФОРМАТИКА</span> </h1>
                    <p>Если вы являетесь студентом ДВГУПС по направлению <br/>
                    `Прикладная информатика в дизайне`, то здесь <br/>
                    собрана вся актуальная информация по вашему направлению</p>
                </div>
            </section>
        </div>
    );
};

SecondSection.propTypes = {
    className : PropTypes.any
}