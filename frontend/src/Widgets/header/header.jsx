import {NavLink} from "react-router-dom";
import s from './header.module.scss'
import '../../App/styles/global.scss'
import festuLogo from '../../img/assets/festuLogo.png'

export const Header = () => {
    return (
        <header className={s['header']}>
            <NavLink to={'/'}>
            <img className={s['header__image']} src={festuLogo} alt="Логотип"/>
            </NavLink>
            <nav className={s['header__navigationBar']}>
                <ul className={s['header__navigationBar--list']}>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/faq">FAQ</NavLink></li>
                    <li><NavLink to="/schedule">SCHEDULE</NavLink></li>
                    <li><NavLink to="/disciplines">DISCIPLINES</NavLink></li>
                    <li><NavLink to="/programming">PROGRAMMING</NavLink></li>
                    <li><NavLink to="/yagpt">YaGPT</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};