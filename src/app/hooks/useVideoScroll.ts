import { useEffect, useRef, useState } from 'react';

interface VideoScrollProps {
  progress: number;
}

export function useVideoScrollProgress(): [
  React.RefObject<HTMLVideoElement>,
  VideoScrollProps,
] {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const SCROLL_START = 50;
  const SCROLL_DISTANCE = 1300;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newProgress = Math.min(
        Math.max((scrollY - SCROLL_START) / SCROLL_DISTANCE, 0),
        1
      );
      setProgress(newProgress);

      const video = videoRef.current;
      if (video && video.duration) {
        video.currentTime = video.duration * newProgress;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [videoRef, { progress }];
}
