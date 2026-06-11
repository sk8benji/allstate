"use client";

import React, { useState } from "react";
import styles from "../car-dealerships-janitorial-services/page.module.css";

interface FaqItemData {
  q: string;
  a: string;
}

interface ServiceFaqProps {
  faqs: FaqItemData[];
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
      <button onClick={onToggle} className={styles.faqQuestion}>
        <span className={styles.faqTitle}>{question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`}>+</span>
      </button>
      <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
        {answer}
      </div>
    </div>
  );
}

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />
      {faqs.map((faq, idx) => (
        <FaqItem
          key={idx}
          question={faq.q}
          answer={faq.a}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
