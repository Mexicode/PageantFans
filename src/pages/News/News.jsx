// JSX File: News.jsx
import "./News.css";
import LazyMedia from "../../components/LazyMedia";
import { useTranslation } from "react-i18next";

// ---- IMPORTS RESOURCES ---- //
import BackgroundStarts from "../../assets/Videos/backgroundStar.webm";
import VideoPrimaryNews from "../../assets/Videos/news.webm";

import ImgMagazine from "../../assets/Images/thom-brodeurs.webp";
import ImgMagazineAgain from "../../assets/Images/thomLondon.webp";
import ImgMagazineThree from "../../assets/Images/Portada3_11zon.webp";
import ImgMiniMagazineOne from "../../assets/Images/Portada1.webp";
import ImgMiniMagazineTwo from "../../assets/Images/Portada2.webp";
import ImgMiniMagazineThree from "../../assets/Images/Portada4_11zon.webp"
;
import ImgCeoPageantry from "../../assets/Images/ceo-thom-brodeur.jpg";

function News() {
    const { t } = useTranslation();
    return (
        <section className="news">
            <div className="news__header">
                <LazyMedia
                    src={VideoPrimaryNews}
                    className="news__header-video"
                    type="video"
                />
                <div className="news__header-overlay">
                    <div className="news__overlay-content">
                        <h1 className="news__overlay-content--title">
                            {t("News-Text1")}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="news__separator"></div>
            <div className="news__content">
                <LazyMedia
                    src={BackgroundStarts}
                    className="news__content-video"
                    type="video"
                />
                <div className="news__content-sections">
                    <div className="news__sections-main">
                        <div className="news__main-first">
                            <div className="news__firts-image">
                                <LazyMedia
                                    src={ImgCeoPageantry}
                                    className="news__image-main"
                                    alt="Thom Brodeur’s Vision for Pageantry"
                                    type="image"
                                />
                            </div>
                            <div className="news__firts-description">
                                <h2 className="news__description-title">
                                    {t("News-Text2")}
                                </h2>
                                <p className="news__description-paragraph">
                                    {t("News-Text3")}
                                </p>
                                <a
                                    href="https://ceodailymag.com/from-crowns-to-creative-empires-thom-brodeurs-vision-for-pageantry-in-the-creator-economy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="button__global--red">
                                        {t("Read More")}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="news__main-second">
                            <div className="news__second-content">
                                <div className="news__content-image">
                                    <LazyMedia
                                        src={ImgMagazine}
                                        className="news__image-second"
                                        alt="Thom Brodeur, a visionary entrepreneur and founder of Brodeur Beauty"
                                        type="image"
                                    />
                                </div>
                                <div className="news__content-text">
                                    <p className="news__text-paragraph">
                                        {t("News-Text4")}
                                    </p>
                                    <a
                                        href="https://entrepreneurdailymag.com/beauty-mavens-to-beauty-moguls-can-thom-brodeurs-vision-reshape-pageantry-into-a-creator-economy-powered-by-the-queens-themselves"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="button__global--red">
                                            {t("Read More")}
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="news__second-content">
                                <div className="news__content-image">
                                    <LazyMedia
                                        src={ImgMagazineAgain}
                                        className="news__image-second"
                                        alt="Thom Brodeur, a visionary entrepreneur and founder of Brodeur Beauty"
                                        type="image"
                                    />
                                </div>
                                <div className="news__content-text">
                                    <p className="news__text-paragraph">
                                        {t("News-Text5")}
                                    </p>
                                    <a
                                        href="https://forbeslondon.com/thom-brodeur-aims-to-revolutionize-the-pageant-industry-empowering-women-beyond-the-crown/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="button__global--red">
                                            {t("Read More")}
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="news__second-content">
                                <div className="news__content-image">
                                    <LazyMedia
                                        src={ImgMagazineThree}
                                        className="news__image-second"
                                        alt="Thom Brodeur, a visionary entrepreneur and founder of Brodeur Beauty"
                                        type="image"
                                    />
                                </div>
                                <div className="news__content-text">
                                    <p className="news__text-paragraph">
                                        {t("News-Text6")}
                                    </p>
                                    <a
                                        href="https://celebritylosangeles.com/fashion/thom-brodeur-visionary-ceo-and-champion-of-women-in-the-beauty-industry/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="button__global--red">
                                            {t("Read More")}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="news__content-separator" />

                    <div className="news__main-third">
                        <div className="news__third-section">
                            <div className="news__section-image">
                                <LazyMedia
                                    src={ImgMiniMagazineOne}
                                    className="news--related__content--img"
                                    alt="Thom Brodeur."
                                    type="image"
                                />
                            </div>
                            <div className="news__section-drafting">
                                <p className="news__drafting-paragraph">
                                    {t("News-Text7")}
                                </p>
                                <a
                                    href="https://fortunefeature.com/thom-brodeur-brand-builder-market-disruptor-mr-congeniality/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="button__global--red">
                                        {t("Read More")}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="news__third-section">
                            <div className="news__section-image">
                                <LazyMedia
                                    src={ImgMiniMagazineTwo}
                                    className="news--related__content--img"
                                    alt="Thom Brodeur."
                                    type="image"
                                />
                            </div>
                            <div className="news__section-drafting">
                                <p className="news__drafting-paragraph">
                                    {t("News-Text8")}
                                </p>
                                <a
                                    href="https://thehollywoodmagazine.com/hollywood/thom-brodeur-visionary-ceo-beauty-mogul-and-advocate-for-women-in-technology/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="button__global--red">
                                        {t("Read More")}
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="news__third-section">
                            <div className="news__section-image">
                                <LazyMedia
                                    src={ImgMiniMagazineThree}
                                    className="news--related__content--img"
                                    alt="Thom Brodeur."
                                    type="image"
                                />
                            </div>
                            <div className="news__section-drafting">
                                <p className="news__drafting-paragraph">
                                    {t("News-Text9")}
                                </p>
                                <a
                                    href="https://ceolosangeles.com/ceo/thom-brodeur-a-visionary-leader-in-the-beauty-industry/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="button__global--red">
                                        {t("Read More")}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;
