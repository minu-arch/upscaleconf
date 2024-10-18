import Image from 'next/image';
import React from 'react';

const Speakers = () => {
  const commonImageClasses = 'w-auto max-h-[15px]  m-[10px]';
  return (
    <div className="section bg-hero ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex flex-col items-start justify-center ">
          <h1 className="uppercase tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-beige">
            Speakers
          </h1>
        </div>
        <div className="flex flex-wrap justify-between mt-10">
          <Image
            src="/1.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/2.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/3.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/4.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/5.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/6.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/7.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/8.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/9.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
          <Image
            src="/10.png"
            width={100}
            height={100}
            alt="Speaker"
            className={commonImageClasses}
          />
        </div>
        <div className="flex flex-wrap mt-10 mx-auto w-full ">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="">
                <Image
                  src="/elizabeth.jpeg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Elizabeth Laraki
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Design Partner,
                </p>
                <p className="text-md uppercase tracking-tighter">
                  Electric Capital
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/jason.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Jason Zada
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Founder, Director at
                </p>
                <p className="text-md uppercase tracking-tighter">
                  Secret level
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/hugo.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Hugo Barbera
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Creative Director &
                </p>
                <p className="text-md uppercase tracking-tighter">
                  Founder, HumAIn
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/joshua-soto.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Joshua Soto
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Artist, Designer,
                </p>
                <p className="text-md uppercase tracking-tighter ">
                  Technologist
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 ">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/davis.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Joshua Davis
                </h1>
                <p className="text-md uppercase tracking-tighter">Artist,</p>
                <p className="text-md uppercase tracking-tighter">
                  Designer, Technologist
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/eid.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  George Eid
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Founder & CEO
                </p>
                <p className="text-md uppercase tracking-tighter">at AREA 17</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/coronges.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Nick Coronges
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Chief Technology
                </p>
                <p className="text-md uppercase tracking-tighter">
                  Officer at R/GA
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/hackney.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Justin Hackney
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Creative Director
                </p>
                <p className="text-md uppercase tracking-tighter">
                  at ElevenLabs
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/cuenca.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Joaquín Cuenca
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Founder & CEO
                </p>
                <p className="text-md uppercase tracking-tighter">at Freepik</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/maier.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Justin Maier
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Founder & CEO
                </p>
                <p className="text-md uppercase tracking-tighter">at Civitai</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/mariana.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Mariana Pedroza
                </h1>
                <p className="text-md uppercase tracking-tighter">Co-founder</p>
                <p className="text-md uppercase tracking-tighter">
                  at Together Art
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/jouke.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Jason Zada
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Co-Founder and CSO
                </p>
                <p className="text-md uppercase tracking-tighter">
                  at Openlicense
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/laia.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Laia Grassi
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  GenAI & Advertising
                </p>
                <p className="text-md uppercase tracking-tighter">
                  Creative Director
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/pau.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  Pau García Milà
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Co-Founder Founderz
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <div className="cursor-pointer flex gap-4 group">
              <div className="shrink-0">
                <Image
                  src="/david.jpg"
                  width={101}
                  height={101}
                  alt="Speaker"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                  David Jensenius
                </h1>
                <p className="text-md uppercase tracking-tighter">
                  Developer at GitHub
                </p>
                <p className="text-md uppercase tracking-tighter">Copilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
