import s from './errorPage.module.scss';
import warningSvg from '../../img/assets/warning-icon.svg'
import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className={s['errorPage']}>
            <span>4</span>
            <img src={warningSvg} alt={'!'}/>
            <span>4</span>
            <h2>Oops! You&#39;re lost.</h2>
            <p>The page you are looking for was not found.</p>
            <Link to="/" className={s['errorPage--link']}>Go Home</Link>
        </div>
    );
};

