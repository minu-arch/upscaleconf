import Image from 'next/image';
import type { ImageProps } from 'next/image';

import { LogoGray } from '../svg/SvgIcons';
import Button from './components/Button';

const Hero = () => {
  const commonClasses = 'font-bold text-lg uppercase';

  return (
    <main className="section relative flex min-h-screen justify-center bg-hero pt-12">
      <div className="container z-10 mx-auto flex flex-wrap justify-center px-2 md:px-10 lg:w-3/4">
        <div className="mt-8 w-full lg:w-1/3">
          <h1 className="flex flex-wrap text-6xl font-semibold uppercase leading-10 tracking-tighter text-beige">
            <span className="block">What to&nbsp;</span>
            <span className="block">expect</span>
          </h1>
          <h2 className="mt-2 flex flex-wrap text-2xl font-normal uppercase leading-10 tracking-tighter text-herotext">
            <span className="block">Agenda coming&nbsp;</span>
            <span className="block">soon</span>
          </h2>
        </div>
        <div className="mt-8 w-full text-beige lg:w-2/3">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
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
            <h1 className="text-5xl font-bold uppercase">
              The core experience
            </h1>
            <p className="text-lg font-bold uppercase">
              Hosted by{' '}
              <span className="hover:cursor-pointer hover:text-herotext">
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
            <h1 className="text-5xl font-bold uppercase">Enjoyables</h1>
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
      <div className="absolute bottom-0 left-0 z-0 w-1/4 max-w-md s:w-2/4 lg:w-2/3 xl:w-3/4">
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
