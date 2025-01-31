// JSX File: Queens.jsx
import "./Queens.css";
import React from "react";
import { Link } from "react-router-dom";
import LazyMedia from "../../components/LazyMedia";
import { useTranslation } from "react-i18next";

// ---- IMPORTS RESOURCES ---- //
import QueensBanner from "../../assets/Videos/queens.webm";
import QueensHero from "../../assets/Videos/Crystal-sparks-wallpaper.webm";
import QueensModel1 from "../../assets/Videos/models.webm";
import QueensModel2 from "../../assets/Videos/models1.webm";
import QueensModel3 from "../../assets/Videos/models3.webm";
import QueensModel4 from "../../assets/Videos/models4.webm";
import QueensModel5 from "../../assets/Videos/Multimedia5.webm";
import QueensMovilVideo from "../../assets/Videos/queens_movil_app.webm";

import QueensImg from "../../assets/Images/HomeQueensDES.webp";
import QueensMovilBackground from "../../assets/Images/VideoBackdrop.webp";

const queensVideos = [
    QueensModel1,
    QueensModel2,
    QueensModel3,
    QueensModel4,
    QueensModel5,
];

function Queens() {
    const { t } = useTranslation();
    return (
        <section className="queens">
            <div className="queens__banner">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    src={QueensBanner}
                    className="queens__banner--video"
                ></video>
                <div className="queens__banner--content">
                    <div className="queens__banner--header">
                        <h1 className="queens__banner--header-title">
                            {t("Queens_Text1")}
                        </h1>
                        <p className="queens__banner--description-text">
                            {t("Queens_Text2")}
                        </p>
                        <div className="queens__banner--actions">
                            <Link to="/joinus/">
                                {" "}
                                <button className="queens__banner--actions-button">
                                    {t("Sign Up")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="queens__separator"></div>
            <div className="queens__hero">
                <LazyMedia
                    src={QueensHero}
                    className="queens__hero--video"
                    type="video"
                />
                <div className="queens__hero--top">
                    <h2 className="queens__hero--top-title">
                        {t("Queens_Text3")}
                    </h2>
                </div>
                <div className="queens__hero-carousel">
                    <div
                        className="queens__hero-carousel--slider"
                        style={{
                            "--width": "295px",
                            "--height": "450px",
                            "--quantity": queensVideos.length,
                        }}
                    >
                        <div className="queens__hero-carousel--list">
                            {queensVideos.map((video, index) => (
                                <div
                                    className="queens__hero-carousel--list-item"
                                    style={{ "--position": index + 1 }}
                                    key={index}
                                >
                                    <LazyMedia
                                        src={video}
                                        className={`queens__hero-carousel--list-item-video me${
                                            index + 1
                                        }`}
                                        type="video"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="queens__hero-text">
                    <h3 className="queens__hero-text--content">
                        {t("Queens_Text4")}
                    </h3>
                </div>
                <div className="queens__hero-cards">
                    <div className="queens__hero-cards--text">
                        <h2 className="queens__hero-cards--texts-subtitle">
                            {t("Queens_Text5")}
                        </h2>
                    </div>
                    <div className="queens__container-video">
                        <LazyMedia
                            src={QueensMovilBackground}
                            className="queens__container-video-img"
                            alt="Model Stories Fund"
                            type="image"
                        />
                        <div className="queens__container--queens">
                            <LazyMedia
                                src={QueensMovilVideo}
                                className="queens__container--queens-video"
                                type="video"
                            />
                        </div>
                    </div>
                </div>
                <div className="queens__hero-cards">
                    <div className="queens__hero-cards--container">
                        <LazyMedia
                            src={QueensImg}
                            className="queens__hero-cards--container-img"
                            alt="Demonstration images of comments and video from the Pageant Fans app"
                            type="image"
                        />
                    </div>
                    <div className="queens__hero-cards--texts">
                        <h2 className="queens__hero-cards--texts-subtitle">
                            {t("Queens_Text6")}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Queens;
