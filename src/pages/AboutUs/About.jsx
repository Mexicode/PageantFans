// JSX File: About.jsx
import "./About.css";
import LazyMedia from "../../components/LazyMedia";
import { useTranslation } from "react-i18next";

// ---- IMPORTS RESOURCES ---- //
import AboutBanner from "../../assets/Videos/MissDenmarkVictoria.webm";
import AboutHero from "../../assets/Videos/Crystal-sparks-wallpaper.webm";
import AboutCards from "../../assets/Videos/About-Us-background.webm";

import AboutThom from "../../assets/Images/thom-brodeur.webp";
import AboutLance from "../../assets/Images/lance-goodman.webp";
import AboutAward from "../../assets/Images/award-pageant.webp";

function About() {
    const { t } = useTranslation();
    return (
        <section className="about">
            <div className="about__banner">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={AboutBanner}
                    className="about__banner--video"
                ></video>
                <div className="about__banner--overlay">
                    <div className="about__banner--content">
                        <h1 className="about__banner--content-title">
                            {t("About-Text1")}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="about__separator"></div>
            <div className="about__content">
                <LazyMedia
                    src={AboutHero}
                    className="about__content--video"
                    type="video"
                />
                <div className="about__information">
                    <div className="about__information--description">
                        <h2 className="about__information--description-title">
                            {t("About-Text2")}
                        </h2>
                        <p className="about__information--description-text">
                            {t("About-Text3")}
                        </p>
                        <p className="about__information--description-text">
                            {t("About-Text4")}
                        </p>
                    </div>
                    <h2 className="about__information--title">
                        {t("About-Text5")}
                    </h2>
                    <div className="about__ceo">
                        <div className="about__ceo--content">
                            <LazyMedia
                                src={AboutThom}
                                className="about__ceo--content-img"
                                alt="Thom Brodeur's face image"
                                type="image"
                            />
                            <LazyMedia
                                src={AboutCards}
                                className="about__ceo--content-video"
                                type="video"
                            />
                            <div className="about__ceo--details">
                                <h2 className="about__ceo--details-name">
                                    Thom Brodeur
                                </h2>
                                <h3 className="about__ceo--details-subtitle">
                                    {t("About-Text6")}
                                </h3>
                                <p className="about__ceo--details-content">
                                    {t("About-Text7")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="about__ceo">
                        <div className="about__ceo--content">
                            <LazyMedia
                                src={AboutCards}
                                className="about__ceo--content-video"
                                type="video"
                            />
                            <div className="about__ceo--details">
                                <h2 className="about__ceo--details-name">
                                    Lance Goodman
                                </h2>
                                <h3 className="about__ceo--details-subtitle">
                                    {t("About-Text8")}
                                </h3>
                                <p className="about__ceo--details-content">
                                    {t("About-Text9")}
                                </p>
                            </div>
                            <LazyMedia
                                src={AboutLance}
                                className="about__ceo--content-img--co"
                                alt="Lance Goodman's face image"
                                type="image"
                            />
                        </div>
                    </div>
                    <h2 className="about__information--industry">
                        {t("About-Text10")}
                    </h2>
                    <div className="about__card">
                        <div className="about__card--award">
                            <LazyMedia
                                src={AboutAward}
                                className="about__card--award-img"
                                alt="Beauty Fashion Stellar Award"
                                type="image"
                            />
                            <div className="about__card--award-content">
                                <h2 className="about__card--award-content-title">
                                    {t("About-Text11")}
                                </h2>
                                <p className="about__card--award-content-description">
                                    {t("About-Text12")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
