import React, { useEffect } from "react";
import "../styles/FeaturesSection.css";
import Aos from "aos";

const FeaturesSection: React.FC = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    const dataCard = [
        {
            icon: "bx bx-bolt-circle icon",
            title: "Fast Response",
            description: "Get answers instantly with lightning-fast AI processing."
        },
        {
            icon: "bx bx-slider-alt icon",
            title: "Customizable",
            description: "Adaptable to your specific requirements, making it truly yours."
        },
        {
            icon: "bx bx-check-circle icon",
            title: "Accurate Answers",
            description: "Our AI is trained to provide accurate and reliable answers."
        }
    ];

    return (
        <section data-aos="fade-up" data-aos-duration="1000" id="features" className="py-5 features-section">
            <div className="container text-center">
                <h2 className="fw-bold text-light">Our AI-Powered Features</h2>
                <p className="text-muted">Explore the innovative features that set us apart.</p>
                <div className="row mt-4">
                    {dataCard.map((item, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000" className="col-md-4" key={index}>
                            <div className="feature-card">
                                <i className={item.icon}></i>
                                <h5 className="mt-3">{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
