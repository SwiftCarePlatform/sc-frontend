import React from 'react';

import Link from 'next/link';

import {
  IconDefinition,
  faBrain,
  faPhone,
  faShieldHalved,
  faUsers,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/ui/button';

const content = [
  // [icon, title, description]
  [
    faVideo,
    'Virtual Consultation',
    'Talk to a doctor online from anywhere. Get medical advice, prescriptions, or follow-ups without visiting the clinic—fast, safe, and convenient.',
  ],
  [
    faPhone,
    'Emergency Helpline',
    'Get instant help in emergencies. Quickly connect with trusted medical helplines or emergency services directly through the platform.',
  ],
  [
    faBrain,
    'Mental Health Services',
    'Professional care to support your emotional health. Whether facing stress, anxiety, or life’s challenges, our therapy services offer personalized help.',
  ],
  [
    faUsers,
    'Community support',
    'You’re not alone. Join support groups and connect with others who share similar health experiences. Share stories, ask questions, and find Comfort.',
  ],
  [
    faShieldHalved,
    'Secure Data and privacy',
    'Your health information stays safe and private. We use strong security to protect your data, so only you and your healthcare team can access it.',
  ],
];

const WhatWeProvide = () => {
  return (
    <section className="from-primary-500 space-y-8 bg-linear-to-b to-[#08292A] px-8 py-12">
      <h2 className="text-center text-4xl font-bold text-white">
        What We Provide
      </h2>
      <div>
        <ul className="flex flex-wrap justify-center gap-4">
          {content.map(([icon, title, description]) => (
            <li
              key={title as string}
              className="shrink-0 basis-md space-y-4 rounded-lg bg-[#176566] p-4"
            >
              <div className="w-fit rounded-md bg-white p-2">
                <FontAwesomeIcon
                  icon={icon as IconDefinition}
                  className="text-primary-500 size-6"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-white">{title as string}</h3>
                <p className="text-[#C1E1E2]">{description as string}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-fit">
        <Button
          asChild
          className="border-primary-500 text-primary-500 border bg-white"
        >
          <Link href="/sign-up">Explore these features</Link>
        </Button>
      </div>
    </section>
  );
};

export default WhatWeProvide;
