import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { CiviTai, FreePik, GoogleCloud, TeslaSvg } from '../svg/SvgIcons';

const Sponsors = () => {
  return (
    <div className="section bg-beige py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-14 text-5xl font-extrabold uppercase tracking-tighter text-semidark">
            Sponsors
          </h2>
          <div className="mb-14 flex flex-wrap items-center justify-center gap-8">
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
          <div className="mb-14 flex flex-wrap items-center justify-center gap-8">
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

          <h2 className="mb-14 text-3xl font-extrabold uppercase tracking-tighter text-semidark">
            In collaboration with
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
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
    className="flex h-[120px] w-[200px] items-center justify-center"
  >
    {children}
  </Link>
);

export default Sponsors;
