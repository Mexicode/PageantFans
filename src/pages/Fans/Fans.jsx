// JSX File: Fans.jsx
import "./Fans.css";
import React from "react";
import LazyMedia from "../../components/LazyMedia";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// ---- IMPORTS RESOURCES ---- //
import ImgFansCollage from "../../assets/Images/IMG-FANS-COLLAGE.webp";
import ImgFansPhone from "../../assets/Images/FansPhone.webp";
import ImgModelsFans from "../../assets/Images/modelsFans.webp";

import VideoFansHome from "../../assets/Videos/fansHome.webm";
import VideoCrystalSparks from "../../assets/Videos/Crystal-sparks-wallpaper.webm";

function Fans() {
    const { t } = useTranslation();
    return (
        <section className="fans">
            <LazyMedia src={VideoFansHome} className="fans__video" type="video" />
            <div className="fans__section">
                <div className="fans__section-header">
                    <h1 className="fans__section-header--tittle">{t('FansSubs-Text1')}</h1>
                    <p className="fans__section-header--content">
                        {t('FansSubs-Text2')}
                    </p>
                    <Link to="/joinus/">
                        <button className="button__global--red">{t('Subscribe')}</button>
                    </Link>
                </div>
            </div>
            <div className="fans__separator"></div>
            <div className="fans__content">
                <LazyMedia src={VideoCrystalSparks} className="fans__content--video" type="video" />
                <div className="fans__content-initial">
                    <div className="fans__initial-image">
                        <LazyMedia
                            src={ImgFansCollage}
                            className="fans__initial-image--collage"
                            alt="Fans collage"
                            type="image"
                        />
                    </div>
                    <div className="fans__initial-content">
                        <h2 className="fans__initial-content--tittle">{t('FansSubs-Text3')}</h2>
                        <p className="fans__initial-content--paragraph">
                            {t('FansSubs-Text4')}
                        </p>
                    </div>
                </div>
                <div className="fans__content-movil">
                    <div className="fans__movil-contain">
                        <h2 className="fans__movil-contain--tittle">
                            {t('FansSubs-Text5')}
                        </h2>
                    </div>
                    <div className="image__movil-image">
                        <LazyMedia
                            src={ImgFansPhone}
                            className="image__movil-image--phone"
                            alt="Phone with fans"
                            type="image"
                        />
                    </div>
                </div>
                <div className="fans__content-community">
                    <div className="fans__community-section">
                        <h3 className="fans__section--tittle">{t('FansSubs-Text6')}</h3>
                        <h2 className="fans__section--subtittle">
                            {t('FansSubs-Text7')}
                        </h2>
                        <p className="fans__section--paragraph">
                            {t('FansSubs-Text8')}
                        </p>
                    </div>
                    <div className="fans__community-image">
                        <LazyMedia
                            src={ImgModelsFans}
                            className="fans__community-image--collage"
                            alt="Fans collage"
                            type="image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fans;
