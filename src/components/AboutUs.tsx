import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import aiImage2 from "../assets/ai2.jpg";
import Aos from "aos";

const AboutUs: React.FC = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh()
    }, []);
    return (
        <section data-aos="fade-up" data-aos-duration="1000" id="about" className="py-5 about-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div data-aos="fade-right" data-aos-duration="1000" className="col-lg-6 col-md-12">
                        <h2 className="fw-bold">About Us</h2>
                        <p>
                            At <span className="brand-name">AskAI</span>, we aim to revolutionize how people interact
                            with technology. Our mission is to provide <span style={{ color: "#00ffcc" }}>instant</span>,
                            reliable answers to your questions through cutting-edge artificial intelligence.
                        </p>
                        <p>
                            Whether it's simple queries or complex problems, <span className="brand-name">AskAI</span>
                            is here to empower your curiosity and make knowledge accessible for everyone,
                            anytime, anywhere.
                        </p>
                    </div>

                    {/* Visual Content */}
                    <div dat-aos="fade-left" data-aos-duration="1000" className="col-lg-6 col-md-12 text-center">
                        <img
                            src={aiImage2}
                            alt="About Us Illustration"
                            className="img-fluid about-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
