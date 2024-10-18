import { useEffect, useRef } from 'react';

export function useVideoScroll() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoHeight = video.offsetHeight;
      const scrollPercentage = Math.min(scrollPosition / videoHeight, 1);

      if (video.duration) {
        video.currentTime = video.duration * scrollPercentage;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return videoRef;
}
