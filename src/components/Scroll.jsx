// JSX File: Scroll.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll to start
    }, [pathname]);

    return null;
}

export default ScrollToTop;
