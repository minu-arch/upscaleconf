'use client';

import { useVideoScroll } from '@/app/hooks/useVideoScroll';

import { LogoGray } from '../svg/SvgIcons';

function Header() {
  const videoRef = useVideoScroll();

  return (
    <header className="section relative overflow-hidden bg-black text-neutral-50 ">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover min-h-screen min-w-screen "
        src="/desktop.mp4"
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto lg:w-3/4 s:px-4 md:px-10 relative z-10 flex flex-col justify-between items-start h-screen">
        <div className="flex flex-wrap gap-4 justify-between w-full mt-2 text-beige">
          <LogoGray className="size-10 " />
          <h2 className="text-responsive-sm font-semibold uppercase tracking-tight leading-tight">
            <span className="block">AI & Creativity</span>
            <span className="block">conference</span>
          </h2>
          <h2 className="text-responsive-sm font-semibold uppercase tracking-tight leading-tight">
            <span className="block">Malaga</span>
            <span className="block">2024</span>
          </h2>
          <h2 className="text-responsive-sm font-semibold uppercase tracking-tight leading-tight">
            <span className="block">Nov</span>
            <span className="block">19-20</span>
          </h2>
        </div>
        <div className="w-full grow flex items-center">
          <h2 className="font-semibold uppercase  text-beige">
            <span className="block text-responsive-lg ">Upscale</span>
            <span className="block text-responsive-lg leading-3">conf</span>
            <span className="block text-responsive-md mt-4">
              Nov 19-20, Malaga, Spain
            </span>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
