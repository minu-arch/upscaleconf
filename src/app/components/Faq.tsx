'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is included in my ticket?',
    answer:
      'Your ticket grants you access to both conference days, including talks, workshops, and the after-party on Tuesday, November 19th. Lunch, coffee, and snacks will be provided during the conference.',
  },
  {
    question: 'Will there be workshops or hands-on sessions?',
    answer:
      'Yes, in addition to talks, we are offering interactive workshops where you can get hands-on experience with the latest AI tools and creative technologies. You will be notified via email with info about how to register for the workshops. Space in workshops is limited.',
  },
  {
    question: 'How do I get to the venue?',
    answer:
      "The venue, Sohrlin, is easily accessible from Malaga's city center, with direct international connections via the Málaga Airport.",
  },
  {
    question: 'Will there be any online live streaming of the event?',
    answer: 'No, not in this first edition so make it sure you are coming!',
  },
  {
    question: 'Is there a refund policy for tickets?',
    answer:
      'Yes, refunds are available up to 30 days before the event. For full terms, please check our ticketing policy.',
  },
];

const FaqItem: React.FC<FaqItem & { isOpen: boolean; toggle: () => void }> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  return (
    <div className="py-4">
      <button className="flex items-center w-full text-left" onClick={toggle}>
        <span
          className={`text-beige text-2xl mr-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
        >
          +
        </span>
        <span className="text-xl font-semibold text-beige uppercase tracking-tighter">
          {question}
        </span>
      </button>
      <div
        className={`mt-2 text-beige pl-10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
        {question === 'Is there a refund policy for tickets?' && (
          <div className="mt-2">
            <Link
              href="/ticketing-policy"
              className=" hover:cursor-pointer hover:text-herotext"
            >
              Check our ticketing policy.
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Faq = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="section bg-hero py-12">
      <div className="container mx-auto s:px-4 md:px-10 lg:w-3/4 py-28">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-9/12">
            <h1 className="text-5xl lg:text-7xl font-bold uppercase text-beige tracking-tighter mb-8">
              FAQ
            </h1>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItemIndex === index}
                  toggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
