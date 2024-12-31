import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
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
