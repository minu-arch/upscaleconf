import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CiviTai, FreePik, GoogleCloud, TeslaSvg } from '../svg/SvgIcons';

const Sponsors = () => {
  return (
    <div className="section bg-beige py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-semidark uppercase tracking-tighter mb-14">
            Sponsors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-14">
            <SponsorLink href="https://cloud.google.com/">
              <GoogleCloud />
            </SponsorLink>
            <SponsorLink href="https://cloud.google.com/">
              <CiviTai />
            </SponsorLink>
            <SponsorLink href="https://cloud.google.com/">
              <Image src="/catedra.png" alt="Catedra" width={162} height={35} />
            </SponsorLink>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-14">
            <SponsorLink href="https://cloud.google.com/">
              <FreePik />
            </SponsorLink>
            <SponsorLink href="https://cloud.google.com/">
              <Image
                src="/mailsuite.png"
                alt="Mailsuit"
                width={162}
                height={35}
              />
            </SponsorLink>
          </div>

          <h2 className="text-3xl font-extrabold text-semidark uppercase tracking-tighter mb-14">
            In collaboration with
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <SponsorLink href="https://cloud.google.com/">
              <Image
                src="/awwwards.png"
                alt="Awwwards"
                width={50}
                height={35}
              />
            </SponsorLink>
            <SponsorLink href="https://cloud.google.com/">
              <TeslaSvg />
            </SponsorLink>
            <SponsorLink href="https://cloud.google.com/">
              <Image src="/ywt.png" alt="YWT" width={80} height={35} />
            </SponsorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const SponsorLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex justify-center items-center h-[120px] w-[200px]"
  >
    {children}
  </Link>
);

export default Sponsors;
