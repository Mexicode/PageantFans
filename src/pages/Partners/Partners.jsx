// JSX File: Partners.jsx
import "./Partners.css";
import React from "react";
import { Link } from "react-router-dom";
import LazyMedia from "../../components/LazyMedia";
import { useTranslation } from "react-i18next";

// ---- IMPORTS RESOURCES ---- //
import backgroundPartners from "../../assets/Videos/Partners.webm";
import videoCrystalSparks from "../../assets/Videos/Crystal-sparks-wallpaper.webm";

import imgPartners from "../../assets/Images/imagen-partners.webp";
import imgLaptopPartners from "../../assets/Images/laptop.webp";

function Partners() {
    const { t } = useTranslation();
    return (
        <section className="partners">
            <div className="partners__banner">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={backgroundPartners}
                    className="partners__banner--video"
                ></video>
                <div className="partners__banner--content">
                    <div className="partners__banner--header">
                        <h1 className="partners__banner--header-title">
                            {t("Partners-Text1")}
                        </h1>
                        <p className="partners__banner--description-text">
                            {t("Partners-Text2")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="partners__separator"></div>
            <div className="partners__body">
                <LazyMedia
                    src={videoCrystalSparks}
                    className="partners__body--video"
                    type="video"
                />
                <div className="partners__body--rows">
                    <div className="partners__body--row">
                        <LazyMedia
                            src={imgPartners}
                            className="partners__row--container-image--image"
                            alt="Partners Image"
                            type="image"
                        />
                        <div className="partners__row--container-text">
                            <h2 className="partners__row--container-text--cards-title">
                                {t("Partners-Text3")}
                            </h2>
                            <p className="partners__row--container-text--cards-text">
                                {t("Partners-Text4")}
                            </p>
                            <div className="partners__row--container-text--container-button">
                                <Link to="/joinus/">
                                    <button className="button__global--red">
                                        {t("Learn More")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="partners__body--row">
                        <div className="partners__row--container-text">
                            <h2 className="partners__row--container-text--cards-title">
                                {t("Partners-Text5")}
                            </h2>
                            <p className="partners__row--container-text--cards-text">
                                {t("Partners-Text6")}
                            </p>
                            <div className="partners__row--container-text--container-button">
                                <Link to="/joinus/">
                                    <button className="button__global--red">
                                        {t("Inquire")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <LazyMedia
                            src={imgLaptopPartners}
                            className="partners__row--container-image--image"
                            alt="Partners Image"
                            type="image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
