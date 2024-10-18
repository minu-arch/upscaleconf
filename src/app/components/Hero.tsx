import Image from 'next/image';
import type { ImageProps } from 'next/image';

import { LogoGray } from '../svg/SvgIcons';
import Button from './components/Button';

const Hero = () => {
  const commonClasses = 'font-bold text-lg uppercase';

  return (
    <main className="relative section bg-hero  flex justify-center  pt-12 min-h-screen ">
      <div className="container mx-auto flex flex-wrap justify-center s:px-4 md:px-10 lg:w-3/4 z-10">
        <div className="w-full lg:w-1/3 mt-8 ">
          <h1 className="text-6xl text-beige font-semibold uppercase tracking-tighter leading-10 flex flex-wrap">
            <span className="block">What to&nbsp;</span>
            <span className="block">expect</span>
          </h1>
          <h2 className="text-2xl font-normal uppercase text-herotext tracking-tighter leading-10 flex flex-wrap mt-2">
            <span className="block">Agenda coming&nbsp;</span>
            <span className="block">soon</span>
          </h2>
        </div>
        <div className="w-full lg:w-2/3 mt-8 text-beige">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col ">
              <h2 className="text-4xl uppercase">tue</h2>
              <h2 className="text-4xl uppercase">nov 19</h2>
              <p className="text-2xl">9 am - 6 pm</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl uppercase">wed</h2>
              <h2 className="text-4xl uppercase">nov 20</h2>
              <p className="text-2xl">9 am - 6 pm</p>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-5xl uppercase font-bold">
              The core experience
            </h1>
            <p className="font-bold text-lg uppercase">
              Hosted by{' '}
              <span className="hover:text-herotext hover:cursor-pointer">
                Linus Ekenstam
              </span>
            </p>
            <p className={commonClasses}>
              Inspiring talks from more than 20 industry leaders{' '}
            </p>
            <p className={commonClasses}>
              Creative workshops led by ai artists and other professionals{' '}
            </p>
            <p className={commonClasses}>
              {' '}
              Networking space to connect and engage with like-minded peers{' '}
            </p>
          </div>
          <div className="mt-12">
            <h1 className="text-5xl uppercase font-bold">Enjoyables</h1>
            <p className={commonClasses}>
              Welcome swag bag with useful and inspiring goodies{' '}
            </p>
            <p className={commonClasses}>
              Lunch, snacks and coffee during the conference days{' '}
            </p>
            <p className={commonClasses}>
              A true Spanish fiesta after party on nov 19{' '}
            </p>
            <p className={commonClasses}>Off-the-talks activities in Malaga.</p>
          </div>
          <Button
            className="mt-12"
            icon={<LogoGray className="size-4" color="#efdfcc" />}
          >
            Early bird tickets
          </Button>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-1/4 s:w-2/4 lg:w-2/3 xl:w-3/4 max-w-md z-0">
        <Image
          src="/whattoexpect.png"
          alt="Descriere imagine"
          width={400}
          height={400}
          layout="responsive"
          objectFit="contain"
        />
      </div>
    </main>
  );
};
export default Hero;
