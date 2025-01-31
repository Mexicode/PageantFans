// JSX File: Carousel.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Carousel = ({ pages }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const paths = ["home", "queens", "fans", "partners"];
    const currentIndex = paths.findIndex((path) =>
        location.pathname.includes(path)
    );

    const [isScrolling, setIsScrolling] = useState(false);

    const nextPage = () => {
        const nextIndex = (currentIndex + 1) % paths.length;
        navigate(`/${paths[nextIndex]}`);
        window.location.reload();
    };

    const prevPage = () => {
        const prevIndex = (currentIndex - 1 + paths.length) % paths.length;
        navigate(`/${paths[prevIndex]}`);
        window.location.reload();
    };

    useEffect(() => {
        let scrollTimeout;
        const sliderInterval = setInterval(() => {
            if (!isScrolling) {
                nextPage();
            }
        }, 19000);

        const handleScroll = () => {
            setIsScrolling(true);

            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 5000);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(sliderInterval);
            clearTimeout(scrollTimeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolling, currentIndex]);

    return (
        <div className="carousel">
            <button onClick={prevPage} className="next-button-left">
                <box-icon
                    name="chevron-left"
                    type="solid"
                    color="#ffffff"
                ></box-icon>
            </button>
            <div className="carousel-content">{pages[currentIndex]}</div>
            <button onClick={nextPage} className="next-button-right">
                <box-icon
                    name="chevron-right"
                    type="solid"
                    color="#ffffff"
                ></box-icon>
            </button>
        </div>
    );
};

export default Carousel;
