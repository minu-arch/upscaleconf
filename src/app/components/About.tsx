'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import Button from './components/Button';

const About = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollPercentage =
          (windowHeight - top) / (bottom - top + windowHeight);

        const totalDistance =
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

        const moveAmount =
          Math.max(0, Math.min(1, scrollPercentage)) * totalDistance * 2;
        carouselRef.current.style.transform = `translateX(-${moveAmount}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section bg-black" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex justify-between mb-12 sm:flex-row flex-col gap-6">
          <h1 className="uppercase whitespace-pre-line tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-beige">
            See you in{'\n'}sunny Malaga
          </h1>
          <Button className="text-6xl w-fit">Early bird tickets</Button>
        </div>
        <p className="text-beige text-2xl uppercase mb-12">
          Explore the world of creative AI and, as a bonus, experience the best
          of Spain. With sunny beaches and incredible food, Málaga is the
          perfect spot to enjoy some downtime.
        </p>
        {/* <div className="overflow-x-visible">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ width: 'max-content' }}
          >
           
            <Image
              src="/venue.jpg"
              alt="Malaga 1"
              width={400}
              height={300}
              className="mr-4"
            />
            <Image
              src="/venue.jpg"
              alt="Malaga 2"
              width={400}
              height={300}
              className="mr-4"
            />
            <Image
              src="/venue.jpg"
              alt="Malaga 3"
              width={400}
              height={300}
              className="mr-4"
            />
            <Image
              src="/venue.jpg"
              alt="Malaga 4"
              width={400}
              height={300}
              className="mr-4"
            />
            <Image
              src="/venue.jpg"
              alt="Malaga 5"
              width={400}
              height={300}
              className="mr-4"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
