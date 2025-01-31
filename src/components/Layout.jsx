// JSX File: Layout.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// ---- IMPORTS RESOURCES ---- //
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Resets the scroll to the top when loading the page
    }, []);

    const location = useLocation();
    const isJoinUsPage = location.pathname === "/joinus/";

    return (
        <div>
            {!isJoinUsPage && <Header />}
            <main className={isJoinUsPage ? "join-us__page" : ""}>
                {children}
            </main>
            {!isJoinUsPage && <Footer />}
        </div>
    );
};

export default Layout;
