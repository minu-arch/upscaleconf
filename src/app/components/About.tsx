'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import Button from './components/Button';

const About = () => {
  return (
    <div className=" bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between mb-12 sm:flex-row flex-col gap-6">
            <h1 className="uppercase whitespace-pre-line tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-beige">
              See you in{'\n'}sunny Malaga
            </h1>
            <Button className="text-6xl w-fit">Early bird tickets</Button>
          </div>
          <p className="text-beige text-2xl uppercase ">
            Explore the world of creative AI and, as a bonus, experience the
            best of Spain. With sunny beaches and incredible food, Málaga is the
            perfect spot to enjoy some downtime.
          </p>
          div
          <HorizontalScrollCarousel />
        </div>
      </div>
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative mb-32">
      <div className="sticky top-0 flex items-start">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div key={card.id} className="group relative size-[450px] bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default About;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: '/venue.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/food.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/drinks.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/culture.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/unwind.jpg',
    title: 'Title 5',
    id: 5,
  },
];
