// JSX File: downloadapp.jsx
import "./downloadapp.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import LazyMedia from "../../components/LazyMedia";

// ---- IMPORTS RESOURCES ---- //
import downloadHeroVideo from "../../assets/Videos/DownloadAppVideo.webm";
import videoIphoneFrame from "../../assets/Videos/MovilAppVideo.webm";
import videoStremGirl from "../../assets/Videos/StreamGilr.webm";

import imgStoriesPage from "../../assets/Images/StoriesPage.webp";
import imgPcMovilPhone from "../../assets/Images/pc-movilPhone.webp";
import codeQrImg from "../../assets/Images/codigoQR.webp";

function DownloadApp() {
    const { t } = useTranslation();
    useEffect(() => {
        document.body.style.backgroundColor = "#fff";

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <section className="download-app">
            <video
                src={downloadHeroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="download-app__video"
                type="video/webm"
            />
            <div className="download-app__content">
                <h2 className="download-app__content--title">
                    {t("DownloadApp-Text1")}
                </h2>
                <div className="download-app__content--grid">
                    <div className="download-app__content--content">
                        <h3 className="download-app__content--subtitle">
                            {t("DownloadApp-Text2")}
                        </h3>
                        <p className="download-app__content--description">
                            {t("DownloadApp-Text3")}
                        </p>
                    </div>
                    <div className="download-app__content--phone">
                        <LazyMedia
                            src={videoIphoneFrame}
                            className="download-app__content--phone--video"
                            type="video"
                        />
                    </div>
                </div>
                <div className="download-app__diagonal">
                    <div className="download-app__diagonal--grid">
                        <div className="download-app__video--two">
                            <LazyMedia
                                src={videoStremGirl}
                                className="download-app__video--two--video"
                                type="video"
                            />
                        </div>
                        <div className="download-app__text">
                            <h2 className="download-app__text--title">
                                {t("DownloadApp-Text4")}
                            </h2>
                            <p className="download-app__text--description">
                                {t("DownloadApp-Text5")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-app__stories">
                    <div className="download-app__stories--content">
                        <h2 className="download-app__stories--content--title">
                            {t("DownloadApp-Text6")}
                        </h2>
                        <p className="download-app__stories--content--description">
                            {t("DownloadApp-Text7")}
                        </p>
                    </div>
                    <LazyMedia
                        src={imgStoriesPage}
                        className="download-app__stories--image"
                        alt="Demonstration of using Stories in the Pageant Fans app"
                        type="image"
                    />
                </div>
            </div>
            <div className="download-app__exclusive">
                <LazyMedia
                    src={imgPcMovilPhone}
                    className="download-app__exclusive--image"
                    alt="Pageant Fans Mobile and Desktop App Demo"
                    type="image"
                />
                <h3 className="download-app__exclusive--description">
                    {t("DownloadApp-Text8")}
                </h3>
            </div>
            <div className="download-app__features">
                <div className="download-app__features--card">
                    <FontAwesomeIcon
                        icon={faApple}
                        style={{ width: "105px", height: "105px" }}
                        className="download-app__features--card--icon"
                    />
                    <h3 className="download-app__features--card--title">IOS</h3>
                    <button className="button__global--red">
                        {t("Download")}
                    </button>
                </div>
                <div className="download-app__features--card">
                    <FontAwesomeIcon
                        icon={faAndroid}
                        style={{ width: "105px", height: "105px" }}
                        className="download-app__features--card--icon"
                    />
                    <h3 className="download-app__features--card--title">
                        Android
                    </h3>
                    <button className="button__global--red">
                        {t("Download")}
                    </button>
                </div>
                <div className="download-app__features--card--QR">
                    <LazyMedia
                        src={codeQrImg}
                        className="download-app__features--card--QR--img"
                        alt="QR to download the PageantFans App"
                        type="image"
                    />
                    <h3 className="download-app__features--card--QR--title">
                        QR
                    </h3>
                    <h4 className="download-app__features--card--QR--subtitle">
                        {t("DownloadApp-Text9")}
                    </h4>
                </div>
            </div>
        </section>
    );
}

export default DownloadApp;
