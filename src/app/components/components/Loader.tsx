import React from 'react';
import { LogoGray } from '@/app/svg/SvgIcons';

const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-hero text-white">
      <LogoGray className="size-5 animate-spin" />
      <h1 className="text-xl font-bold uppercase text-beige">
        upscaling content
      </h1>
      <p className="whitespace-pre-line font-bold uppercase text-textfooter">
        Please wait ...{'\n'}(It`s worth it)
      </p>
    </div>
  );
};

export default Loader;
