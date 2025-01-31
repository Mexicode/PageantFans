// JSX File: Downloads.jsx
import "./Downloads.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LazyMedia from "../../components/LazyMedia";

// ---- IMPORTS RESOURCES ---- //
import BackgroundStarts from "../../assets/Videos/backgroundStar.webm";

import ImgMockupIphone from "../../assets/Images/movil.webp";
import CodeQrImg from "../../assets/Images/codigoQR.webp";

function Download() {
    const { t } = useTranslation();
    return (
        <section className="download">
            <LazyMedia
                src={BackgroundStarts}
                className="download__video"
                type="video"
            />
            <div className="download__content-main">
                <div className="download__main-header">
                    <h1 className="download__header--title">{t("Download")}</h1>
                </div>
                <div className="download__content-section">
                    <div className="download__section-two">
                        <div className="download__two-phone">
                            <LazyMedia
                                src={ImgMockupIphone}
                                className="download__phone--img"
                                alt="Mobile with the PageantFans application"
                                type="image"
                            />
                        </div>
                        <div className="download__two-text">
                            <div className="download__text-qr">
                                <LazyMedia
                                    src={CodeQrImg}
                                    className="download__text-qr--img"
                                    alt="PageantFans page QR code"
                                    type="image"
                                />
                            </div>
                            <div className="download__text-paragraph">
                                <p className="download__paragraph-text">
                                    {t("Download-Text1")}
                                </p>
                            </div>
                            <div className="download__button">
                                <Link to="/download/downloadapp">
                                    <button className="button__global--red">
                                        {t("Download")}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Download;
