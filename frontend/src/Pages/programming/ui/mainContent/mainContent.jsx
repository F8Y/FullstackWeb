import s from './mainContent.module.scss';
import { ContentBlock } from '../contentBlock/contentBlock.jsx';
import PropTypes from "prop-types";

export const MainContent = ({ category, language, className }) => {
    return (
        <div className={className}>
            <main className={s['mainContent__content']}>
                <ContentBlock category={category} language={language} />
            </main>
        </div>
    );
};

MainContent.propTypes = {
    category : PropTypes.string,
    language: PropTypes.string,
    className: PropTypes.string
};