import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { ClouseSvg } from '../../svg/SvgIcons';

interface Link {
  label: string;
  url: string;
}

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  links: Link[];
}

interface AboutPersonProps {
  speaker: Speaker | null;
  onClose: () => void;
  isOpen: boolean;
}

const AboutPerson: React.FC<AboutPersonProps> = ({
  speaker,
  onClose,
  isOpen,
}) => {
  return (
    <AnimatePresence>
      {speaker && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-end bg-black/50"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="relative size-full max-w-md overflow-y-auto bg-black p-8 text-beige"
          >
            <button
              onClick={onClose}
              className="absolute left-5 top-4 text-beige"
            >
              <ClouseSvg />
            </button>
            <div className="mt-8">
              <Image
                src={speaker.image}
                width={150}
                height={150}
                alt={speaker.name}
                className="mb-4 object-cover"
              />
              <h2 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                {speaker.name}
              </h2>
              <p className="text-md mb-4 uppercase tracking-tighter">
                {speaker.role} {speaker.company}
              </p>
              <p className="mb-4 text-sm">{speaker.bio}</p>
              <div className="flex gap-4">
                {speaker.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-tighter text-beige underline hover:text-herotext hover:no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutPerson;
