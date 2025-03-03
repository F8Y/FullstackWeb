import {FirstSection} from './ui/firstSection/firstSection.jsx'
import {SecondSection} from './ui/secondSection/secondSection.jsx'
import {ThirdSection} from "./ui/thirdSection/thirdSection.jsx";
import PropTypes from "prop-types";
import s from "./homePage.module.scss"

export const HomePage = ({scrollY}) => {
    const style = {
    '--scroll-Y' : scrollY
}

    return (
        <div className={s['homePage']} style = {style}>
            <FirstSection className = {s['homePage__firstSection']}/>
            <SecondSection className = {s['homePage__secondSection']}/>
            <ThirdSection className = {s['homePage__thirdSection']}/>
        </div>
    );
};

HomePage.propTypes = {
    scrollY : PropTypes.number.isRequired
};