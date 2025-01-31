// JSX File: Subscribers.jsx
import "./Subscribers.css";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LazyMedia from "../../components/LazyMedia";

// ---- IMPORTS RESOURCES ---- //
import ImgFansCollage from "../../assets/Images/IMG-FANS-COLLAGE.webp";
import ImgFansPhone from "../../assets/Images/FansPhone.webp";
import ImgModelsFans from "../../assets/Images/modelsFans.webp";

import VideoFansHome from "../../assets/Videos/fansHome.webm";
import VideoCrystalSparks from "../../assets/Videos/Crystal-sparks-wallpaper.webm";

function Subscribers() {
    const { t } = useTranslation();
    return (
        <section className="subscribers">
            <LazyMedia
                src={VideoFansHome}
                className="subscribers__video"
                type="video"
            />
            <div className="subscribers__section">
                <div className="subscribers__section-header">
                    <h1 className="subscribers__section-header--tittle">
                        {t("FansSubs-Text1")}
                    </h1>
                    <Link to="/joinus/">
                        <button className="button__global--red">
                            {t("Subscribe")}
                        </button>
                    </Link>
                </div>
            </div>

            <div className="subscribers__separator"></div>
            <div className="subscribers__content">
                <LazyMedia
                    src={VideoCrystalSparks}
                    className="fans__content--video"
                    type="video"
                />
                <div className="subscribers__content-initial">
                    <div className="fans__initial-image">
                        <LazyMedia
                            src={ImgFansCollage}
                            className="fans__initial-image--collage"
                            alt="Fans collage"
                            type="image"
                        />
                    </div>

                    <div className="subscribers__initial-content">
                        <h2 className="subscribers__initial-content--tittle">
                            {t("FansSubs-Text3")}
                        </h2>
                        <p className="subscribers__initial-content--paragraph">
                            {t("FansSubs-Text4")}
                        </p>
                    </div>
                </div>

                <div className="subscribers__content-movil">
                    <div className="subscribers__movil-contain">
                        <h2 className="subscribers__movil-contain--tittle">
                            {t("FansSubs-Text5")}
                        </h2>
                    </div>
                    <div className="subscribers__movil-image">
                        <LazyMedia
                            src={ImgFansPhone}
                            className="subscribers__movil-image--phone"
                            alt="Phone with fans"
                            type="image"
                        />
                    </div>
                </div>

                <div className="subscribers__content-community">
                    <div className="subscribers__community-section">
                        <h3 className="subscribers__section--tittle">
                            {t("FansSubs-Text6")}
                        </h3>
                        <h2 className="subscribers__section--subtittle">
                            {t("FansSubs-Text7")}
                        </h2>
                        <p className="subscribers__section--paragraph">
                            {t("FansSubs-Text8")}
                        </p>
                    </div>
                    <div className="subscribers__community-image">
                        <LazyMedia
                            src={ImgModelsFans}
                            className="subscribers__community-image--collage"
                            alt="subscribers collage"
                            type="image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribers;
