import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I open a DhanSetu account?",
            answer:
                "You can open your DhanSetu account online within minutes using your PAN card, Aadhaar card, and bank details.",
        },

        {
            question: "How long does withdrawal take?",
            answer:
                "Fund withdrawals are usually processed within 24 working hours directly to your registered bank account.",
        },

        {
            question: "Why was my order rejected?",
            answer:
                "Orders may be rejected due to insufficient balance, price limits, market volatility, or incorrect order details.",
        },

        {
            question: "How to reset my password?",
            answer:
                "You can reset your password securely using the Forgot Password option available on the login page.",
        },

        {
            question: "What are brokerage charges?",
            answer:
                "DhanSetu offers transparent and affordable brokerage charges with no hidden fees.",
        },
    ];

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-5 bg-light">
            <div className="container">

                <h2 className="text-center fw-bold mb-5">
                    Popular FAQs
                </h2>

                <div className="bg-white rounded-4 shadow-sm p-4">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`py-3 ${index !== faqs.length - 1
                                    ? "border-bottom"
                                    : ""
                                }`}
                        >
                            {/* QUESTION BUTTON */}
                            <button
                                className="btn w-100 text-start fw-semibold shadow-none border-0 d-flex justify-content-between align-items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}

                                <span className="fs-4">
                                    {openIndex === index ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                                </span>
                            </button>

                            {/* ANSWER */}
                            {openIndex === index && (
                                <p className="bg-primary text-white p-3 w-100 rounded " >
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default FAQs;