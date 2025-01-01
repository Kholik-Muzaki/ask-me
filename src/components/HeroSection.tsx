import React, { useEffect } from "react";
import "../styles/HeroSection.css";
import aiImage from "../assets/ai.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection: React.FC = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="hero-section" id="hero">
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Content */}
                    <div className="col-lg-6 col-md-12 hero-content">
                        <h1>
                            Ask Anything...<br /><span>Get Answers</span>
                        </h1>
                        <p className="lead">
                            Powered by cutting-edge AI technology, AskAI provides instant, accurate answers to all
                            your questions. Simplifying your curiosity, one question at a time.
                        </p>
                        <div className="hero-buttons">
                            <a href="/chat" className="btn btn-primary-hero me-3">
                                Start Asking
                            </a>
                            <a href="#features" className="btn btn-secondary-hero">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="col-lg-6 col-md-12 hero-visual">
                        <img
                            src={aiImage}
                            alt="Ask AI Illustration"
                            className="img-fluid hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;