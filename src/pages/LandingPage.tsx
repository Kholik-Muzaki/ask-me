import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutUs from "../components/AboutUs";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
const LandingPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <AboutUs />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
