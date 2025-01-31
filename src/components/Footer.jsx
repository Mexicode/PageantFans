// JSX File: Footer.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faXTwitter,
    faYoutube,
    faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import LazyMedia from "./LazyMedia";

// ---- IMPORTS RESOURCES ---- //
import LogoFans from "../assets/Images/logo-PageantFans.webp";

function Footer() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("language") || "en"
    );

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        localStorage.setItem("language", lng);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLanguage);
        setSelectedLanguage(savedLanguage);
    }, []);

    return (
        <footer className="footer__main">
            <div className="footer">
                <div className="footer__container-logo">
                    <a href="/">
                        <LazyMedia
                            src={LogoFans}
                            className="footer__container-logo--img"
                            alt="Pageant Fans logo"
                            type="image"
                        />
                    </a>
                    <div className="footer__container-social--networks">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                className="icon__footer--user"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="icon__footer--user"
                            />
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="icon__footer--user"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="icon__footer--user"
                            />
                        </a>
                        <a
                            href="https://www.snapchat.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faSnapchat}
                                className="icon__footer--user"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer__links">
                    <div className="footer__links-container">
                        <Link data-item="About Us" to="/about">
                            {t("About Us")}
                        </Link>
                        <Link data-item="Download" to="/download">
                            {t("Download")}
                        </Link>
                        <Link data-item="Subscribers" to="/subscribers">
                            {t("Subscribers")}
                        </Link>
                        <Link data-item="News" to="/news">
                            {t("News")}
                        </Link>
                    </div>
                </div>

                <div className="footer__selectors">
                    <div className="footer__selectors-container">
                        <box-icon name="dollar-circle" color="#fff"></box-icon>
                        <select
                            name="Cash"
                            id="cash-selector"
                            defaultValue={"value1"}
                        >
                            <option
                                className="footer__select-option"
                                value="value1"
                            >
                                USD
                            </option>
                            <option
                                className="footer__select-option"
                                value="value2"
                            >
                                MXN
                            </option>
                            <option
                                className="footer__select-option"
                                value="value3"
                            >
                                EUR
                            </option>
                        </select>
                    </div>

                    <div className="footer__selectors-container">
                        <box-icon name="world" color="#fff"></box-icon>
                        <select
                            name="Language"
                            id="language-selector"
                            value={selectedLanguage}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            <option
                                className="footer__select-option"
                                value="en"
                            >
                                {t("English")}
                            </option>
                            <option
                                className="footer__select-option"
                                value="es"
                            >
                                {t("Spanish")}
                            </option>
                            <option
                                className="footer__select-option"
                                value="pt"
                            >
                                {t("Portuguese")}
                            </option>
                            <option
                                className="footer__select-option"
                                value="fr"
                            >
                                {t("French")}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="footer__terms">
                <p className="footer__terms-paragraph">
                    {t("Copyright Footer")}
                    <br />
                    ©2018 – 2025 PageantFans LLC.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
