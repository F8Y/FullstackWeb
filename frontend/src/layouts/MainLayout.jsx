import { Header } from "../Widgets/header/header.jsx";
import { Footer } from "../Widgets/footer/footer.jsx";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const MainLayout = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty("--scrollY", scrollY + "px");
    }, [scrollY]);

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet context={{ scrollY }} />
            </main>
            <Footer />
        </div>
    );
};
