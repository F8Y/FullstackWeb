import s from './programmingPage.module.scss'
import { ProgrammingNav } from "./ui/nav/programmingNav.jsx";
import { MainContent } from "./ui/mainContent/mainContent.jsx";
import { useState } from "react";
import propTypes from 'prop-types'

export const ProgrammingPage = () => {

    const [selectedCategory, setSelectedCategory] = useState('webProgramming');
    const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

    const handleSelect = (category, language) => {
        setSelectedCategory(category);
        setSelectedLanguage(language);
    }

    return (
        <div className={s['programmingPage']}>
            <ProgrammingNav className = {s['programmingPage__navigation']} onSelect = {handleSelect}/>
            <MainContent className = {s['programmingPage__main']} category = {selectedCategory} language = {selectedLanguage}/>
        </div>
    );
};

