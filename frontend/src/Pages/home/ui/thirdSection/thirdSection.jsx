import s from './thirdSection.module.scss'
import sectionImage from '../../../../img/assets/homePageImage.png'
import PropTypes from "prop-types";

export const ThirdSection = ({className}) => {
    return (
        <div className={className}>
            <section className={s['thirdSection']}>
                <div className={s['thirdSection__image']}>
                    <img
                        className={s['thirdSection__image--img']}
                         src = {sectionImage}
                         alt = 'Изображение'
                    />
                </div>
                <div className={s['thirdSection__text']}>
                    <h2>ИСПОЛЬЗУЙТЕ <span> САМУЮ <br/>
                        АКТУАЛЬНУЮ </span> ИНФОРМАЦИЮ <br/>
                        ДЛЯ РЕШЕНИЯ ВОПРОСОВ</h2>
                    <p>На сайте представлены все методические пособия по
                    дисциплинам направления, языкам программирования, а
                    также возможность использования нейросети от Yandex!</p>
                    <a
                        href = 'https://store.steampowered.com/app/3164500/Schedule_I/'
                        target='_blank'
                        rel = 'noopener norefferer'
                        className={s['thirdSection__text--link']}
                    >
                        Ознакомиться
                    </a>
                </div>
            </section>
        </div>
    );
};

ThirdSection.propTypes = {
    className : PropTypes.any
}