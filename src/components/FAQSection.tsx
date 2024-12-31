import React from "react";
import "../styles/FAQSection.css";

const FAQSection: React.FC = () => {
    const faqs = [
        {
            question: "How does AskAI work?",
            answer: "AskAI uses advanced machine learning algorithms to provide instant answers to your questions."
        },
        {
            question: "Is AskAI free to use?",
            answer: "Yes, AskAI is free to use for basic queries. Advanced features may require a subscription."
        },
        {
            question: "Does AskAI support multiple languages?",
            answer: "Currently, AskAI supports English. Additional languages will be added soon."
        }
    ];

    return (
        <section id="faq" className="py-5 faq-section">
            <div className="container">
                <h2 className="fw-bold text-center text-light">Frequently Asked Questions</h2>
                <div className="mt-4">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h5 className="faq-question">{faq.question}</h5>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
