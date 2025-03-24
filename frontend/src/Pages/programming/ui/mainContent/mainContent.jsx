import s from './mainContent.module.scss';
import { ContentBlock } from '../contentBlock/contentBlock.jsx';

export const MainContent = ({ category, language, className }) => {
    return (
        <div className={className}>
            <main className={s['mainContent__content']}>
                <ContentBlock category={category} language={language} />
            </main>
        </div>
    );
};
