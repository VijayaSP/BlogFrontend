import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I find specific articles?",
    answer: "Use the search bar on the homepage or blog page to find articles by keyword.",
  },
  {
    question: "Can I filter articles by category?",
    answer: "Yes! Use the category dropdown on the blog page to filter posts by specific tags.",
  },
  {
    question: "What happens when I search from the homepage?",
    answer: "You’ll be redirected to the blog page with results filtered based on your keyword.",
  },
  {
    question: "Can I combine search and category filters?",
    answer: "Absolutely! Combine both for more accurate results.",
  },
  {
    question: "Is the blog mobile-friendly?",
    answer: "Yes, our blog is fully responsive and works seamlessly across all devices.",
  },
  {
    question: "Can I submit my own articles?",
    answer: "Currently, user-submitted articles are not supported. Stay tuned for future updates.",
  },
  {
    question: "How often is the blog updated?",
    answer: "We publish fresh content weekly to keep you informed and inspired.",
  },
  {
    question: "Can I bookmark articles for later?",
    answer: "This feature is under development and will be available soon!",
  },
  {
    question: "How can I contact support?",
    answer: "Use our contact form or email support@example.com for any queries.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-blue-200 shadow-md transition-all duration-300 bg-gradient-to-tr from-white via-blue-50 to-blue-100"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left text-blue-900 font-semibold hover:bg-blue-50 focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-700" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-blue-800 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
