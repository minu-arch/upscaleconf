import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { ClouseSvg } from '../../svg/SvgIcons';

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
    customLink?: string;
  };
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
          className="fixed inset-0 bg-black/50 flex items-center justify-end z-50"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="bg-black text-beige size-full max-w-md overflow-y-auto p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 left-5 text-beige"
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
              <h2 className="text-xl font-bold mb-2 uppercase tracking-tighter">
                {speaker.name}
              </h2>
              <p className="text-md mb-4 uppercase tracking-tighter">
                {speaker.role} {speaker.company}
              </p>
              <p className="mb-4 text-sm">{speaker.bio}</p>
              <div className="flex gap-4">
                {speaker.links.linkedin && (
                  <a
                    href={speaker.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-herotext text-sm"
                  >
                    LinkedIn
                  </a>
                )}
                {speaker.links.twitter && (
                  <a
                    href={speaker.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-herotext text-sm"
                  >
                    Twitter
                  </a>
                )}
                {speaker.links.customLink ? (
                  <a
                    href={speaker.links.customLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-herotext text-sm"
                  >
                    GitHub
                  </a>
                ) : (
                  speaker.links.website && (
                    <a
                      href={speaker.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-herotext text-sm"
                    >
                      Website
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutPerson;
