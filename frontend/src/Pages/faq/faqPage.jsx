import { DropdownBlock } from "../../Shared/dropdown/dropdownBlock.jsx";
import s from "./faqPage.module.scss"

export const FaqPage = () => {

    const faqText = {
        firstP: 'Вы попали на ресурс для студентов ДВГУПС направления ПРИ - ' +
            '"Прикладная информатика в дизайне", здесь мы собрали всю полезную информацию, ' +
            'которая пригодится студентом в ходе всего обучения.',
        secondP: 'На данном ресурсе расположены методические материалы по всем дисциплинам направления, ' +
            'а также пособия по языкам программирования, которые фигурируют в течение всего обучения',
        thirdP: ''
    };

    return (
        <div className={s['faq']}>
            <h1>Найдите ответ на любой вопрос</h1>
            <div className={s['faq__content']}>
            <DropdownBlock customParagraph={faqText.firstP} headerText={'Куда я попал?'} customNumber={1}/>
            <DropdownBlock customParagraph={faqText.secondP} headerText={'Что я могу здесь найти?'} customNumber={2}/>
            <DropdownBlock customParagraph={faqText.thirdP} headerText={'aboba'} customNumber={3}/>
            <DropdownBlock customParagraph={'aboba'} headerText={'aboba'} customNumber={4}/>
            <DropdownBlock customParagraph={'aboba'} headerText={'aboba'} customNumber={5}/>
            </div>
        </div>
    );
};
