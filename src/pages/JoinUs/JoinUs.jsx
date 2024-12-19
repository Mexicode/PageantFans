import './JoinUs.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import imgLaptopGirl1 from '../../assets/Images/LaptopGirl.gif';

function JoinUs() {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null); 

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const urls = [
            "https://formsubmit.co/thom@pageantfans.io",
            "https://formsubmit.co/lance@pageantfans.io"
        ];

        try {
            for (const url of urls) {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData
                });
                if (!response.ok) {
                    throw new Error(`Error sending data to ${url}`);
                }
            }

            setMessage({
                type: 'success',
                text: 'Form submitted successfully.',
                icon: faCheckCircle,
            });

            event.target.reset();
            setTimeout(() => {
                setMessage(null);
            }, 3000); 

        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({
                type: 'Error',
                text: 'There was an error submitting the form.',
                icon: faTimesCircle,
            });
        }
    };

    return (
        <section className="joinus">
            <div className="joinus__form">
                <div className="joinus__header">
                    <button onClick={handleBack} className="joinus__header-link">
                        <FontAwesomeIcon icon={faChevronLeft} className="joinus__header-arrow" style={{ color: "#000000" }} />
                    </button>
                    <h1 className="joinus__title">COMING SOON!</h1>
                </div>
                <div className="joinus__form-content joinus__form-content--hover">
                    <img src={imgLaptopGirl1} alt="this slowpoke moves" className="joinus__form-image" />
                    <form onSubmit={handleSubmit} className="joinus__form-fields">
                        <h3 className="joinus__form-title">Join our community!</h3>
                        <p className="joinus__form-description">
                            Exclusive content, community, and commerce with your favorite queens from around the world. Right here. Right now!
                        </p>
                        <label className="joinus__form-label" htmlFor="nameInput">
                            Name <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <input type="text" name="Name" id="nameInput" required className="joinus__form-input" />
                        <label className="joinus__form-label" htmlFor="emailInput">
                            Email <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <input type="email" name="Email" id="emailInput" required className="joinus__form-input" />
                        <label className="joinus__form-label" htmlFor="typeSelect">
                            Tell Us Who You Are <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <select className="joinus__form-select" name="Type of lead" id="typeSelect" required>
                            <option value="">Choose one</option>
                            <option value="Queen">Queen</option>
                            <option value="Fan">Fan</option>
                            <option value="Partner">Partner</option>
                        </select>
                        <label className="joinus__form-label" htmlFor="phoneInput">
                            Phone number <samp className="joinus__form-required" title="Optional">*</samp>
                        </label>
                        <input type="text" name="Phone-Number" id="phoneInput" required className="joinus__form-input" />
                        <p className="joinus__form-required-text">* Required fields</p>
                        <button className="joinus__form-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>

            {message && (
                <div className={`message ${message.type}`}>
                    <FontAwesomeIcon icon={message.icon} />
                    <p>{message.text}</p>
                </div>
            )}
        </section>
    );
}

export default JoinUs;


