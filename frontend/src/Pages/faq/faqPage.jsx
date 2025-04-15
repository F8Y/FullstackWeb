import { DropdownBlock } from "../../Shared/dropdown/dropdownBlock.jsx";
import s from "./faqPage.module.scss"

export const FaqPage = () => {

    const faqText = [
        {
            headerText: "Куда я попал",
            paragraphText: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit. Ut congue scelerisque imperdiet. " +
                "Pellentesque pharetra molestie convallis. Curabitur vehicula id purus a tempor. " +
                "Donec tincidunt neque magna, quis facilisis diam dapibus non. " +
                "Suspendisse pellentesque ac dui eget vestibulum. " +
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Praesent sem orci, pharetra et dui ac, pellentesque interdum felis. " +
                "Nunc ornare libero elit, volutpat fermentum nunc rhoncus ullamcorper. " +
                "Etiam lacinia gravida ante bibendum venenatis. Sed nec turpis diam. " +
                "Nunc sit amet nulla tellus. Aenean facilisis, velit sit amet suscipit malesuada, dui justo varius nisi, ut eleifend nisl lacus a velit. " +
                "Vestibulum quis gravida justo, ut semper magna.",
            key: 1
        },
        {
            headerText: "Что я здесь могу найти",
            paragraphText: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit. Ut congue scelerisque imperdiet. " +
                "Pellentesque pharetra molestie convallis. Curabitur vehicula id purus a tempor. " +
                "Donec tincidunt neque magna, quis facilisis diam dapibus non. " +
                "Suspendisse pellentesque ac dui eget vestibulum. " +
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Praesent sem orci, pharetra et dui ac, pellentesque interdum felis. " +
                "Nunc ornare libero elit, volutpat fermentum nunc rhoncus ullamcorper. " +
                "Etiam lacinia gravida ante bibendum venenatis. Sed nec turpis diam. " +
                "Nunc sit amet nulla tellus. Aenean facilisis, velit sit amet suscipit malesuada, dui justo varius nisi, ut eleifend nisl lacus a velit. " +
                "Vestibulum quis gravida justo, ut semper magna.",
            key: 2
        },
        {
            headerText: "Lorem ipsum",
            paragraphText: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit. Ut congue scelerisque imperdiet. " +
                "Pellentesque pharetra molestie convallis. Curabitur vehicula id purus a tempor. " +
                "Donec tincidunt neque magna, quis facilisis diam dapibus non. " +
                "Suspendisse pellentesque ac dui eget vestibulum. " +
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Praesent sem orci, pharetra et dui ac, pellentesque interdum felis. " +
                "Nunc ornare libero elit, volutpat fermentum nunc rhoncus ullamcorper. " +
                "Etiam lacinia gravida ante bibendum venenatis. Sed nec turpis diam. " +
                "Nunc sit amet nulla tellus. Aenean facilisis, velit sit amet suscipit malesuada, dui justo varius nisi, ut eleifend nisl lacus a velit. " +
                "Vestibulum quis gravida justo, ut semper magna.",
            key: 3
        },
        {
            headerText: "Lorem ipsum",
            paragraphText: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit. Ut congue scelerisque imperdiet. " +
                "Pellentesque pharetra molestie convallis. Curabitur vehicula id purus a tempor. " +
                "Donec tincidunt neque magna, quis facilisis diam dapibus non. " +
                "Suspendisse pellentesque ac dui eget vestibulum. " +
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Praesent sem orci, pharetra et dui ac, pellentesque interdum felis. " +
                "Nunc ornare libero elit, volutpat fermentum nunc rhoncus ullamcorper. " +
                "Etiam lacinia gravida ante bibendum venenatis. Sed nec turpis diam. " +
                "Nunc sit amet nulla tellus. Aenean facilisis, velit sit amet suscipit malesuada, dui justo varius nisi, ut eleifend nisl lacus a velit. " +
                "Vestibulum quis gravida justo, ut semper magna.",
            key: 4
        },
        {
            headerText: "Lorem ipsum",
            paragraphText: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit. Ut congue scelerisque imperdiet. " +
                "Pellentesque pharetra molestie convallis. Curabitur vehicula id purus a tempor. " +
                "Donec tincidunt neque magna, quis facilisis diam dapibus non. " +
                "Suspendisse pellentesque ac dui eget vestibulum. " +
                "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. " +
                "Praesent sem orci, pharetra et dui ac, pellentesque interdum felis. " +
                "Nunc ornare libero elit, volutpat fermentum nunc rhoncus ullamcorper. " +
                "Etiam lacinia gravida ante bibendum venenatis. Sed nec turpis diam. " +
                "Nunc sit amet nulla tellus. Aenean facilisis, velit sit amet suscipit malesuada, dui justo varius nisi, ut eleifend nisl lacus a velit. " +
                "Vestibulum quis gravida justo, ut semper magna.",
            key: 5
        },
    ];


    return (
        <div className={s['faq']}>
            <h1>Найдите ответ на любой вопрос</h1>
            <div className={s['faq__content']}>
                {faqText.map((item, index) => (
                    <DropdownBlock
                        key = {index}
                        headerText={item.headerText}
                        customParagraph={item.paragraphText}
                        customNumber={item.key}
                    />
                ))}
            </div>
        </div>
    );
};
