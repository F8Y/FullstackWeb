import s from './firstSection.module.scss'
import mainImage from '../../../../img/assets/homePageImage.png'
import PropTypes from "prop-types";

export const FirstSection = ({className}) => {
    return (
        <div className={className}>
            <section className={s['firstSection']}>
                <img className={
                    s['firstSection__image']}
                     src = {mainImage}
                     alt = 'Изображение'
                />
            </section>
        </div>
    );
};

FirstSection.propTypes = {
    className : PropTypes.any
}