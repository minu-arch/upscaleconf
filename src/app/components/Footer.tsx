import Link from 'next/link';
import React from 'react';

import { LogoGray } from '../svg/SvgIcons';

const Footer = () => {
  return (
    <footer className="bg-bgfooter py-12 text-beige">
      <div className="container mx-auto px-2">
        <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="hidden lg:block">
            <LogoGray className="size-24" color="#efdfcc" />
          </div>

          <div className="mb-8 w-full lg:mb-0 lg:w-1/2">
            <h2 className="mb-5 text-2xl font-bold">STAY UPDATED</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-black p-2 pr-24 text-beige"
              />
              <button className="absolute inset-y-0 right-0 bg-transparent px-4 text-[#ff4d00] transition-colors duration-300 hover:text-[#ff6d20]">
                Subscribe
              </button>
            </div>
            <p className="mt-2 max-w-md text-xs font-bold text-textfooter">
              By clicking subscribe, Freepik Company will process your data for
              the purpose of sending information about the event. You can find
              out how to exercise your rights and more information in the
              Privacy policy.
            </p>
          </div>

          <div className="mb-8 flex space-x-4 lg:mb-0">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-[#ff4d00]"
            >
              TWITTER
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-[#ff4d00]"
            >
              INSTAGRAM
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-[#ff4d00]"
            >
              LINKEDIN
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 font-bold">SOHRLIN ANDALUCIA</p>
            <p>C/ ALMONTE, 6, CARRETERA DE CÁDIZ, </p>
            <p>29004 MÁLAGA, SPAIN</p>
          </div>
          <div className="flex flex-col lg:items-start">
            <Link
              href="mailto:INFO@UPSCALECONF.COM"
              className="mb-2 transition-colors duration-300 hover:text-[#ff4d00] lg:mb-0 lg:mr-4"
            >
              INFO@UPSCALECONF.COM
            </Link>
            <Link
              href="/privacy-policy"
              className="mb-2 transition-colors duration-300 hover:text-[#ff4d00] lg:mb-0 lg:mr-4"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors duration-300 hover:text-[#ff4d00]"
            >
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
