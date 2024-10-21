import React from 'react';
import { LogoGray } from '@/app/svg/SvgIcons';

const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-hero text-white">
      <LogoGray className="loader size-5 animate-spin" />
      <style jsx>{`
        .loader {
          width: 20px;
          height: 20px;
        }
      `}</style>
      <h1 className="uppercase text-beige">upscaling content</h1>
      <p className="font-bold uppercase text-textfooter">
        Please wait ... (It`s worth it)
      </p>
    </div>
  );
};

export default Loader;
