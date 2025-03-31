import { NavLink } from "react-router-dom";
import s from './header.module.scss';
import '../../App/styles/global.scss';
import festuLogo from '../../img/assets/festuLogo.png';

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={'/'}>
                <img className={s['header__image']} src={festuLogo} alt="Логотип" />
            </NavLink>
            <nav className={s['header__navigationBar']}>
                <ul className={s['header__navigationBar--list']}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/schedule"
                            className={({ isActive }) => isActive ? s.activeLink : "fff"}
                        >
                            SCHEDULE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/disciplines"
                            className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >
                            DISCIPLINES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/programming"
                            className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >
                            PROGRAMMING
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/yagpt"
                            className={({ isActive }) => isActive ? s.activeLink : undefined}
                        >
                            YaGPT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
