import {Routes, Route} from "react-router-dom";
import {HomePage} from "../Pages/home/homePage.jsx";
import {FaqPage} from "../Pages/faq/faqPage.jsx";
import {SchedulePage} from "../Pages/schedule/schedulePage.jsx";
import { ProgrammingPage } from "../Pages/programming/programmingPage.jsx";
import { InfPage } from "../Pages/programming/ui/infPage/infPage.jsx";
import PropTypes from "prop-types";

export const AppRoutes = ({scrollY}) => {
    return (
        <Routes>
            <Route path = "/" element = {<HomePage scrollY={scrollY}/>} />
            <Route path = '/faq' element = {<FaqPage />} />
            <Route path = '/schedule' element = {<SchedulePage />} />
            <Route path = '/programming' element={<ProgrammingPage />} />
            <Route path = '/inf' element = {<InfPage />} />
            <Route path = "*" element = {<HomePage scrollY={scrollY}/>} />   {/*Добавить pageNotFound*/}
        </Routes>
    );
}

AppRoutes.propTypes = {
    scrollY : PropTypes.number.isRequired
};