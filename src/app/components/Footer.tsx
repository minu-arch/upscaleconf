import Link from 'next/link';
import React from 'react';

import { LogoGray } from '../svg/SvgIcons';

const Footer = () => {
  return (
    <footer className="bg-bgfooter text-beige py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="hidden lg:block">
            <LogoGray className="size-24" color="#efdfcc" />
          </div>

          <div className="mb-8 lg:mb-0 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-5">STAY UPDATED</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-black text-beige p-2 w-full pr-24"
              />
              <button className="absolute right-0 inset-y-0 bg-transparent text-[#ff4d00] px-4 hover:text-[#ff6d20] transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-textfooter font-bold mt-2 max-w-md">
              By clicking subscribe, Freepik Company will process your data for
              the purpose of sending information about the event. You can find
              out how to exercise your rights and more information in the
              Privacy policy.
            </p>
          </div>

          <div className="flex space-x-4 mb-8 lg:mb-0">
            <Link
              href="#"
              className="hover:text-[#ff4d00] transition-colors duration-300"
            >
              TWITTER
            </Link>
            <Link
              href="#"
              className="hover:text-[#ff4d00] transition-colors duration-300"
            >
              INSTAGRAM
            </Link>
            <Link
              href="#"
              className="hover:text-[#ff4d00] transition-colors duration-300"
            >
              LINKEDIN
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-4 lg:mb-0">
            <p className="font-bold mb-2">SOHRLIN ANDALUCIA</p>
            <p>C/ ALMONTE, 6, CARRETERA DE CÁDIZ, </p>
            <p>29004 MÁLAGA, SPAIN</p>
          </div>
          <div className="flex flex-col lg:items-start">
            <Link
              href="mailto:INFO@UPSCALECONF.COM"
              className="hover:text-[#ff4d00] transition-colors duration-300 mb-2 lg:mb-0 lg:mr-4"
            >
              INFO@UPSCALECONF.COM
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-[#ff4d00] transition-colors duration-300 mb-2 lg:mb-0 lg:mr-4"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-[#ff4d00] transition-colors duration-300"
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
