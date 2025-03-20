import s from './programmingNav.module.scss';
import { Dropdown, ButtonToolbar } from "rsuite";
import { navData } from "./navData.js";

export const ProgrammingNav = () => (
    <div className={s['programming']}>
        <nav className={s['programming__nav']}>
            <ButtonToolbar className={s['programming__nav--bar']}>
                {navData.map(({ title, items }, index) => (
                    <div className={s['programming__dropdown-container']} key={index}>
                        <Dropdown
                            title={title}
                            size="lg"
                            appearance="default"
                            className={s['programming__dropdown']}
                        >
                            {items.map((item, idx) => (
                                <Dropdown.Item key={idx} className={s['programming__dropdown-item']}>{item}</Dropdown.Item>
                            ))}
                        </Dropdown>
                    </div>
                ))}
            </ButtonToolbar>
            <hr />
        </nav>
    </div>
);