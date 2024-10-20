'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import AboutPerson from './components/AboutPerson';

// Definim tipul pentru un vorbitor
interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isAboutPersonOpen, setIsAboutPersonOpen] = useState(false);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: ' Elizabeth Laraki',
      role: ' Design Partner,',
      company: 'Electric Capital',
      image: '/elizabeth.jpeg',
      bio: "Elizabeth is a Design Partner at Electric Capital. She has 20 years of executive experience leading design teams and shaping core products at Google, YouTube, and Facebook. Some of the projects she has led include early versions of Google Maps, evolving Facebook`s privacy tools, and building Facebook's Social Impact products. Elizabeth has a BFA in Graphic Design from the University of Michigan and a Masters of Design from Carnegie Mellon University. She lives in the San Francisco Bay Area with her husband, their three boys, dog, two cats, and flock of chickens.",
      links: {
        linkedin: 'https://www.linkedin.com/in/elizabethlaraki/',
        twitter: 'https://twitter.com/elizabethlaraki',
        website: 'https://electriccapital.com/',
      },
    },
    {
      id: 1,
      name: 'Jason Zada',
      role: 'Founder, Director at',
      company: 'Secret Level',
      image: '/jason.jpg',
      bio: 'Jason Zada is an acclaimed American director and digital marketer, renowned for creating innovative interactive projects that became viral sensations. He merges technology with storytelling, and in the current AI era, Zada is at the forefront of creating AI-driven productions. This year he crafted a notable ad for the Black Eyed Peas residency in Las Vegas. With over 70 industry awards, Zada is a reference in digital media and advertising.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: ' Hugo Barbera',
      role: 'Creative Director &',
      company: 'Founder, HumAIn',
      image: '/hugo.jpg',
      bio: 'Hugo is a seasoned, award-winning art director with a 15-year trial in advertising and the fashion industry. His AI work includes a Vogue Magazine cover back in 2022, an award-winning AI film project published in Vogue in 2023, exhibitions in Milan and New York, and public speaking at events like the Digital Fashion Week in Paris. Beyond crafting visual narratives, he has been teaching creative innovation for the last 7 years at Brother, twice Cannes School of the Year. His expertise extends to leading industry workshops, public speaking at the Digital Fashion Week in Paris, and exhibits in Milan and New York. His work includes brands like Audi, Nike, FC Barcelona, Vogue and Forbes.',
      links: {
        linkedin: 'https://www.linkedin.com/in/hugobarbera/',
        twitter: 'https://twitter.com/hugobarbera',
        website: 'https://humain.com/',
      },
    },
    {
      id: 1,
      name: ' Joshua Soto',
      role: ' Artist, Designer,',
      company: 'Technologist',
      image: '/joshua-soto.jpg',
      bio: 'Joshua Soto is the Co-Founder, President, and Chief Strategy Officer at OpenLicense. With deep expertise in ethical data practices and licensing solutions, Joshua helps organizations navigate the complexities of data use while ensuring compliance and fostering trust.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Joshua Davis',
      role: 'Artist,',
      company: ' Designer, Technologist',
      image: '/davis.jpg',
      bio: 'Joshua Davis is an American designer, technologist, author, and visual artist in new media. He is best known as the creator of praystation.com, winner of the Prix Ars Electronica 2001 Golden Nica for "Net Vision / Net Excellence".',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'George Eid',
      role: ' Founder & CEO',
      company: 'at AREA 17',
      image: '/eid.jpg',
      bio: 'George is one of three partners of AREA 17. In 2003, he founded the agency in New York, then in 2006, opened the studio in Paris. In 2008, he started an incubator within the agency, developing products such as Subfolio, Slash, and Krrb.Most recently, George led the creation of Twill, an open-source CMS toolkit for Laravel used by most of our clients. As with all partners, he is hands-on, working as a strategic consultant with clients across both studios.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Nick Coronges',
      role: ' Chief Technology',
      company: 'Officer at R/GA',
      image: '/coronges.jpg',
      bio: 'Global Chief Technology Officer at R/GA, a full service innovation consultancy + R/GA Ventures, a venture studio for corporate development and early and growth stage companies. Hacker, team builder, explorer. Nick started his career designing and building technology for early internet startups in San Francisco and New York City. He combines creative passion with technical implementation know-how to build meaningful technology-driven experiences.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Justin Hackney',
      role: 'Creative Director',
      company: 'at ElevenLabs',
      image: '/hackney.jpg',
      bio: 'Justin, a Creative Director at ElevenLabs. With over a decade of experience, he brings a deep passion for storytelling through directing, filming, and producing resonating content. Before ElevenLabs, Justin worked with clients like Honda, Lego, and Uber Eats at Mad Cow Films, where he balanced creativity with commercial success. He also founded RealDreams.io, an AI-driven creative studio fostering community and innovation.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
      },
    },
    {
      id: 1,
      name: 'Joaquín Cuenca',
      role: 'Founder & CEO',
      company: 'at Freepik',
      image: '/cuenca.jpg',
      bio: 'Joaquín is the CEO and Co-founder of Freepik, the global tech company specializing in high-quality audio-visual resources. Since the company`s 2010 inception in Malaga, Spain, Freepik has emerged as a global powerhouse in digital design-oriented tools and content, driven by Joaquín`s creative vision and passion for innovation. The company, which was mainly bootstrapped, now has over 250 million visual resources available, more than 150 million monthly users, a team in the USA, and is a pioneer of AI creativity.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Justin Maier',
      role: ' Founder & CEO',
      company: 'at Civitai',
      image: '/maier.jpg',
      bio: 'Justin Maier is the Founder and CEO of Civitai, with over 15 years of experience in digital media, specializing in web design and development. He is passionate about interaction design, front-end development, and leveraging new technologies to create innovative solutions. Maier aspires to build useful tools that people incorporate into their daily lives, driven by his dedication to improving user experiences and pushing the boundaries of digital innovation.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Mariana Pedroza',
      role: 'Co-founder',
      company: 'at Together Art',
      image: '/mariana.jpg',
      bio: 'I`m a multidisciplinary artist, designer, entrepreneur and teacher that`s building beautiful design tools and charming communities. In the past was a Design Executive at BBVA. I was in charge of helping designers develop their career within the largest design team in Latin America, leader of the community of practice and the co-host of the podcast Design Wednesday. I have a background in Industrial Design a specialty in Sustainability, with two Red Dot Design Awards under my belt but I also DJ, write and paint murals.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Jouke Vuurmans',
      role: 'Co-Founder and CSO',
      company: 'at Openlicense',
      image: '/jouke.jpg',
      bio: 'Jouke started his career as the first creative at Monks when MySpace was still a thing. Since then the digital creative world has evolved rapidly. That changing landscape became his creative playground and became the foundation of Jouke`s (and Monks`) growth into a creative powerhouse with international recognition. He shines as a paragon of creative versatility, blending storytelling with the tactile essence of tangible experiences and always infused with the cutting-edge realms of technology. As the digital domain evolved, Jouke adeptly navigated the creative industry changes, transitioning from digital production prowess to broader agency ambitions, all while forging a unique path that transcended conventional industry paradigms. Next to working on hundreds of award-winning projects, Jouke has also played a key role establishing Monks` reputation as a global creative & production partner as the Global CCO.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Laia Grassi',
      role: 'GenAI & Advertising',
      company: 'Creative Director',
      image: '/laia.jpg',
      bio: 'Hi, I`m Laia Grassi, the GenAi & Advertising Creative Director known for my expertise in blending imaginative storytelling with the latest in generative AI technology. My journey in the marketing realm began over twenty years ago, marking the start of a fascinating adventure that has led me to influence some of the globe`s most distinguished brands, such as Coca-Cola, Audi, Skoda, Google, Oreo, and Volkswagen. My passion for generative AI took center stage when I emerged victorious in a global competition, paving the way for a landmark Coca-Cola project centered around AI. This pivotal moment was a precursor to my role as a co-founder of XELMY, an avant-garde advertising agency celebrated for its groundbreaking campaigns. After five years of leadership and the subsequent sale of XELMY in 2023, I delved deeper into the AI-advertising nexus, driven by a fervent belief in AI`s power to revolutionize storytelling and leave an enduring positive impact on society.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: 'Pau García Milà',
      role: ' Co-Founder ',
      company: 'Founderz',
      image: '/pau.jpg',
      bio: 'Pau Garcia-Mila is a serial entrepreneur born in Barcelona in 1987. He founded his first company at 18, which was later acquired by Telefónica. In 2011, he was named Innovator of the Year by MIT`s TR-35. He went on to found Ideafoster, a consultancy and SaaS firm specializing in rapid prototyping, which was acquired in 2018 by Canvia, an Advent International company. Currently, he is the co-founder and co-CEO of Founderz, a business and AI school, recognized as a Microsoft Worldwide Learning Partner in AI training in 2024.',
      links: {
        linkedin: 'https://www.linkedin.com/in/jasonzada/',
        twitter: 'https://twitter.com/jasonzada',
        website: 'https://secretlevel.com/',
      },
    },
    {
      id: 1,
      name: ' David Jensenius',
      role: ' Developer at GitHub',
      company: 'Copilot',
      image: '/david.jpg',
      bio: 'David Jensenius is a media artist, composer, software engineer, and trouble maker living in Kitchener, Ontario, Canada. In addition to his art practice, David works at GitHub on Copilot.',
      links: {
        website: 'https://secretlevel.com/',
      },
    },
  ];

  const commonImageClasses = 'w-auto max-h-[15px] m-[10px]';

  return (
    <div className="section bg-hero relative">
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
        <div className="flex flex-wrap mt-10 mx-auto w-full">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div
                className="cursor-pointer flex gap-4 group"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <div className="shrink-0">
                  <Image
                    src={speaker.image}
                    width={101}
                    height={101}
                    alt={speaker.name}
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col text-beige group-hover:text-herotext transition-all duration-300">
                  <h1 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                    {speaker.name}
                  </h1>
                  <p className="text-md uppercase tracking-tighter">
                    {speaker.role}
                  </p>
                  <p className="text-md uppercase tracking-tighter">
                    {speaker.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedSpeaker && (
        <AboutPerson
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
          isOpen={true}
        />
      )}
    </div>
  );
};

export default Speakers;
