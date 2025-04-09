import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/home/homePage.jsx";
import { FaqPage } from "../Pages/faq/faqPage.jsx";
import { SchedulePage } from "../Pages/schedule/schedulePage.jsx";
import { ProgrammingPage } from "../Pages/programming/programmingPage.jsx";
import { InfPage } from "../Pages/programming/ui/infPage/infPage.jsx";
import { ErrorPage } from "../Pages/error/errorPage.jsx";

import { MainLayout } from "../layouts/MainLayout.jsx";
import { BareLayout } from "../layouts/BareLayout.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/programming" element={<ProgrammingPage />} />
                <Route path="/inf" element={<InfPage />} />
            </Route>

            <Route element={<BareLayout />}>
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
