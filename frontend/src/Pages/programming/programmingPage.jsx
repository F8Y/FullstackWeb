import s from './programmingPage.module.scss'
import { ProgrammingNav } from "./ui/nav/programmingNav.jsx";
import { MainContent } from "./ui/mainContent/mainContent.jsx";
import propTypes from 'prop-types'

export const ProgrammingPage = () => {
    return (
        <div className={s['programmingPage']}>
            <ProgrammingNav className = {s['programmingPage__navigation']} />
            <MainContent className = {s['programmingPage__main']}/>
        </div>
    );
};

