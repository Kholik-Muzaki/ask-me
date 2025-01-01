import React, { useEffect } from "react";
import "../styles/Footer.css";
import Aos from "aos";

const Footer: React.FC = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <footer className="footer" data-aos="fade-up" data-aos-duration="1000">
            <div className="container text-center">
                <p className="brand-name">AskAI</p>
                <p className="tagline">Simplifying your curiosity, one question at a time.</p>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#faq">Faq</a>
                </div>
                <p className="copyright">© 2025 AskAI. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
