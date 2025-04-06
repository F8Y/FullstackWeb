import { NavLink } from "react-router-dom";
import s from './header.module.scss';
import '../../App/styles/global.scss';
import festuLogo from '../../img/assets/festuLogo.png';
import clsx from "clsx";

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
                            className={({ isActive }) => clsx({ [s.activeLink]: isActive })}
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) => clsx({ [s.activeLink ]: isActive })}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/schedule"
                            className={({ isActive }) => clsx({ [s.activeLink]: isActive })}
                        >
                            SCHEDULE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/disciplines"
                            className={({ isActive }) => clsx({ [s.activeLink]: isActive })}
                        >
                            DISCIPLINES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/programming"
                            className={({ isActive }) => clsx({ [s.activeLink]: isActive })}
                        >
                            PROGRAMMING
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/yagpt"
                            className={({ isActive }) => clsx({ [s.activeLink]: isActive })}
                        >
                            YaGPT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
