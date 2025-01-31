// JSX File: Home.jsx
import "./Home.css";
import React, { useEffect, useRef } from "react";
import LazyMedia from "../../components/LazyMedia";
import { useTranslation } from "react-i18next";

// ---- IMPORTS RESOURCES ---- //
import Video1 from "../../assets/Videos/opening_video.webm";
import Video2 from "../../assets/Videos/opening_video2.webm";

import Image1 from "../../assets/Images/homepage_photo1.webp";
import Image2 from "../../assets/Images/homepage_photo2.webp";
import Image3 from "../../assets/Images/homepage_photo4.webp";
import Image4 from "../../assets/Images/homepage_photo5.webp";

import LogoHeader from "../../assets/Images/pageantfans_logo.webp";
import OpeningBanner from "../../assets/Videos/Opening_Banner.webm";

import backgroundStarts from "../../assets/Videos/backgroundStar.webm";

function Home() {
    const { t } = useTranslation();
    const repetitionInterval = 1;
    const animationRef = useRef(null);

    function animationHeader(video) {
        video.volume = 0;
        if (video.paused) {
            video.play();
        }
    }

    function logoAnimation(logoHeader, redline) {
        logoHeader.classList.add("home__container--logo-animation");
        logoHeader.style.display = "block";
        redline.classList.add("home__container--text-redline-animation");
        redline.style.display = "flex";
    }

    function textsAnimation(subtitle, paragraph) {
        [subtitle, paragraph].forEach((el) => {
            el.style.display = "block";
            el.classList.add(
                `home__container-text__${
                    el === subtitle ? "subtitle" : "paragraph"
                }-animation`
            );
        });
    }

    useEffect(() => {
        const video = document.getElementById("bg-header-video-mobile");
        const elements = {
            logo: document.getElementById("logo-header"),
            redline: document.getElementById("redline-header"),
            subtitle: document.getElementById("subtitle-header"),
            paragraph: document.getElementById("paragraph-header"),
        };
        const startAnimation = () => {
            logoAnimation(elements.logo, elements.redline);
            textsAnimation(elements.subtitle, elements.paragraph);
            setTimeout(
                () =>
                    Object.values(elements).forEach(
                        (el) => (el.style.display = "none")
                    ),
                15500
            );

            const animation = animationRef.current;
            animation.style.animation = "none";
            void animation.offsetWidth;
            animation.style.animation = "write 7s steps(40) 1 forwards";
        };

        const checkAnimationTrigger = () => {
            animationHeader(video);
            if (
                video.currentTime >= 4.1 &&
                video.currentTime <= 4.5 &&
                !video.paused
            ) {
                startAnimation();
            }
        };
        const intervalId = setInterval(
            checkAnimationTrigger,
            repetitionInterval
        );
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section>
            <nav className="home">
                <div className="home__container-video">
                    <video
                        src={OpeningBanner}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="home__container-video--video"
                        id="bg-header-video-mobile"
                    ></video>
                </div>
                <div className="home__container--logo">
                    <img
                        src={LogoHeader}
                        className="home__container--logo-image"
                        id="logo-header"
                        alt=""
                    />
                </div>
                <div className="home__container--text">
                    <h2
                        className="home__container--text-subtitle"
                        id="subtitle-header"
                    >
                        {t("Home_Text1")}
                    </h2>
                    <div
                        className="home__container--text-redline"
                        id="redline-header"
                    >
                        <div className="home__container--text-line"></div>
                    </div>
                    <div className="home__container--text-paragraph">
                        <p
                            className="home__container--text-paragraph-text"
                            id="paragraph-header"
                        >
                            {t("Home_Text2")}
                            <span ref={animationRef}>&#160;</span>
                        </p>
                    </div>
                </div>
            </nav>

            <div className="home__separator"></div>

            <section className="home__cards">
                <LazyMedia
                    src={backgroundStarts}
                    className="home__cards-video"
                    type="video"
                />
                <div className="home__cards--grid">
                    <div className="home__cards--grid-img1">
                        <LazyMedia
                            src={Image2}
                            className="home__cards--grid-media"
                            alt="Images of two Pageant Fans models"
                            type="image"
                        />
                    </div>
                    <div className="home__cards--grid-video1">
                        <LazyMedia
                            src={Video2}
                            className="home__cards--grid-media"
                            type="video"
                        />
                    </div>
                    <div className="home__cards--grid-img2">
                        <LazyMedia
                            src={Image1}
                            className="home__cards--grid-media"
                            alt="Image of three Pageant Fans models"
                            type="image"
                        />
                    </div>
                    <div className="home__cards--grid-text">
                        <h3 className="home__cards--text">{t("Home_Text3")}</h3>
                    </div>
                    <div className="home__cards--grid-img3">
                        <LazyMedia
                            src={Image3}
                            className="home__cards--grid-media"
                            alt="Pageant Fans model from the front"
                            type="image"
                        />
                    </div>
                    <div className="home__cards--grid-video2">
                        <LazyMedia
                            src={Video1}
                            className="home__cards--grid-media"
                            type="video"
                        />
                    </div>
                    <div className="home__cards--grid-img4">
                        <LazyMedia
                            src={Image4}
                            className="home__cards--grid-media"
                            alt="Pageant Fans model from the side"
                            type="image"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
