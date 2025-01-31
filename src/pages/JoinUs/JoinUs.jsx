// JSX File: JoinUs.jsx
import "./JoinUs.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import LazyMedia from "../../components/LazyMedia";

// ---- IMPORTS RESOURCES ---- //
import imgLaptopGirl from "../../assets/Images/LaptopGirl.gif";

function JoinUs() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(null);
    const buttonSubmit = useRef(null);

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValid = validateForm(event.target);
        if (!isValid) return;

        buttonSubmit.current.style.cursor = "not-allowed";
        buttonSubmit.current.disabled = true;
        buttonSubmit.current.style.opacity = 0.5;
        document.body.style.cursor = "wait";
        setProgress(10);

        const formData = new FormData(event.target);
        const urls = [
            "https://formsubmit.co/thom@pageantfans.io",
            "https://formsubmit.co/lance@pageantfans.io",
        ];

        try {
            for (const url of urls) {
                setProgress((prev) => prev + 80 / urls.length);

                const response = await fetch(url, {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`Error sending data to ${url}`);
                }
            }

            setProgress(100);
            setMessage({
                type: "success",
                text: t("Message_1"),
            });

            event.target.reset();
            setTimeout(() => {
                setMessage(null);
                setProgress(0);
            }, 3000);
        } catch (error) {
            console.error(t("Message_2"), error);
            setMessage({
                type: "error",
                text: t("Message_3"),
            });
            setProgress(0);
        } finally {
            buttonSubmit.current.disabled = false;
            document.body.style.cursor = "default";
            buttonSubmit.current.style.cursor = "default";
            buttonSubmit.current.style.opacity = 1;
        }
    };

    const validateForm = (form) => {
        const nameInput = form.elements["Name"];
        const emailInput = form.elements["Email"];
        const phoneInput = form.elements["Phone-Number"];
        const typeSelect = form.elements["Type of lead"];

        // Validation logic
        if (
            !nameInput.value.trim() ||
            !/^[a-zA-Z\s]+$/.test(nameInput.value) ||
            nameInput.value.length < 2
        ) {
            setMessage({
                type: "error",
                text: t("Message_4"),
            });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return false;
        }

        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setMessage({
                type: "error",
                text: t("Message_5"),
            });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return false;
        }

        if (!typeSelect.value) {
            setMessage({
                type: "error",
                text: t("Message_6"),
            });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return false;
        }

        if (phoneInput.value && !/^\d{10,15}$/.test(phoneInput.value)) {
            setMessage({
                type: "error",
                text: t("Message_7"),
            });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            return false;
        }

        return true;
    };

    const handlePhoneInput = (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/\D/g, "");
    };

    const handleNameInput = (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^a-zA-Z\s]/g, "");
    };

    return (
        <section className="join-us">
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: `${progress}%`,
                    height: "5px",
                    backgroundColor: progress === 100 ? "#4caf50" : "#e30426",
                    transition: "width 0.2s ease",
                    zIndex: 1000,
                }}
            />
            <div className="join-us__form">
                <div className="join-us__form-header">
                    <button
                        onClick={handleBack}
                        className="join-us__form-header--link"
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="join-us__form-header--arrow"
                            style={{ color: "#000000" }}
                        />
                    </button>
                    <h1 className="join-us__form-header--title" lang="es">
                        {t("Join-Text1")}
                    </h1>
                </div>

                <div className="join-us__features">
                    <div className="join-us__form-content">
                        <div className="join-us__form-content--grid">
                            <LazyMedia
                                src={imgLaptopGirl}
                                className="join-us__form-content--image"
                                alt="Laptop Girl"
                                type="image"
                            />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="join-us__form-content--fields"
                        >
                            <h2 className="join-us__form-content--title">
                                {t("Join-Text2")}
                            </h2>
                            <p className="join-us__form-content--description">
                                {t("Join-Text3")}
                            </p>
                            <label
                                className="join-us__form-content--label"
                                htmlFor="nameInput"
                            >
                                {t("Join-Text4")}
                                <samp
                                    className="join-us__form-content--required"
                                    title="Required"
                                >
                                    *
                                </samp>
                            </label>
                            <input
                                type="text"
                                name="Name"
                                id="nameInput"
                                required
                                className="join-us__form-content--input"
                                onInput={handleNameInput}
                            />
                            <label
                                className="join-us__form-content--label"
                                htmlFor="emailInput"
                            >
                                {t("Join-Text5")}
                                <samp
                                    className="join-us__form-content--required"
                                    title="Required"
                                >
                                    *
                                </samp>
                            </label>
                            <input
                                type="email"
                                name="Email"
                                id="emailInput"
                                required
                                className="join-us__form-content--input"
                            />
                            <label
                                className="join-us__form-content--label"
                                htmlFor="typeSelect"
                            >
                                {t("Join-Text6")}
                                <samp
                                    className="join-us__form-content--required"
                                    title="Required"
                                >
                                    *
                                </samp>
                            </label>
                            <select
                                className="join-us__form-content--select"
                                name="Type of lead"
                                id="typeSelect"
                                required
                            >
                                <option value="">{t("Join-Text7")}</option>
                                <option value="Queen">{t("Join-Text8")}</option>
                                <option value="Fan">{t("Join-Text9")}</option>
                                <option value="Partner">
                                    {t("Join-Text10")}
                                </option>
                            </select>
                            <label
                                type="number"
                                className="join-us__form-content--label"
                                htmlFor="phoneInput"
                            >
                                {t("Join-Text11")}
                                <samp
                                    className="join-us__form-content--required"
                                    title="Optional"
                                >
                                    *
                                </samp>
                            </label>
                            <input
                                type="text"
                                name="Phone-Number"
                                id="phoneInput"
                                required
                                className="join-us__form-content--input"
                                onInput={handlePhoneInput}
                            />
                            <p className="join-us__form-content--required-text">
                                * {t("Join-Text12")}
                            </p>
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            ></input>
                            <button
                                className="button__global--red"
                                type="submit"
                                ref={buttonSubmit}
                            >
                                {t("Join-Text13")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {message && (
                <div className={`join-us__message ${message.type}`}>
                    <FontAwesomeIcon icon={message.icon} />
                    <p>{message.text}</p>
                </div>
            )}
        </section>
    );
}

export default JoinUs;
