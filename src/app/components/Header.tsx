'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useVideoScrollProgress } from '../hooks/useVideoScroll';
import { LogoGray } from '../svg/SvgIcons';

function Header() {
  const [videoRef, { progress }] = useVideoScrollProgress();
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && contentRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const contentHeight = contentRef.current.offsetHeight;
        const triggerPoint = headerRect.height * 1.15 - contentHeight;

        setIsFixed(window.scrollY < triggerPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative h-[200vh] overflow-hidden bg-black text-neutral-50"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          src="/desktop.mp4"
          muted
          playsInline
          style={{ transform: `scale(${1 + progress * 0.2})` }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        ref={contentRef}
        className={`${
          isFixed ? 'fixed top-0' : 'absolute -top-full'
        } inset-x-0 z-10 h-screen transition-all duration-300`}
      >
        <div className="container mx-auto flex h-full flex-col items-start justify-between px-4 md:px-10 lg:w-3/4">
          <div className="mt-2 flex w-full flex-wrap justify-between gap-4 text-beige">
            <LogoGray className="size-10" />
            <h2 className="text-responsive-sm font-semibold uppercase leading-tight tracking-tight">
              <span className="block">AI & Creativity</span>
              <span className="block">conference</span>
            </h2>
            <h2 className="text-responsive-sm font-semibold uppercase leading-tight tracking-tight">
              <span className="block">Malaga</span>
              <span className="block">2024</span>
            </h2>
            <h2 className="text-responsive-sm font-semibold uppercase leading-tight tracking-tight">
              <span className="block">Nov</span>
              <span className="block">19-20</span>
            </h2>
          </div>
          <div className="flex w-full grow items-center">
            <h2 className="font-semibold uppercase text-beige">
              <span className="block text-responsive-lg">Upscale</span>
              <span className="block text-responsive-lg leading-3">conf</span>
              <span className="mt-4 block text-responsive-md">
                Nov 19-20, Malaga, Spain
              </span>
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
