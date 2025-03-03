import s from './footer.module.scss'

export const Footer = () => {
    return (
        <div>
            <footer className={s['footer']}>
            <div className={s['footer__contacts']}>
                <h2>О нас</h2>
                <h2>Дополнительная информация</h2>
                <h2>Контакты</h2>
            </div>
                <p className={s['footer__copyright']}>
                    © 2024 Nikolay Shoshin<br/>
                    Nikolay Shoshin<br/>
                    ИНН: 745219838414</p>
            </footer>
        </div>
    );
};