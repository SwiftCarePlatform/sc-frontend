import Link from 'next/link';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/ui/button';

const content = [
  // [title, description]
  [
    'Create an account',
    'Sign up quickly to unlock access to trusted, personalized healthcare services.',
  ],
  [
    'Choose a Service',
    'Pick the care you need—medical, mental health, or emergency—quickly and easily.',
  ],
  [
    'Schedule session',
    'Book a time that works for you and connect with a healthcare expert fast and hassle-free.',
  ],
  [
    'Join a community',
    'Connect with supportive groups and resources to empower your health journey together.',
  ],
];

const HowSwiftcareWorks = () => {
  return (
    <section className="w-full bg-[#f4f4f4] px-8 py-12">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="max-w-lg space-y-4">
          <h2 className="text-4xl font-bold">
            How <span className="text-primary-500">Swiftcare</span> Works
          </h2>
          <p className="text-black-300">
            Begin your journey to accessible healthcare and compassionate grief
            support—no barriers, just care when you need it most.
          </p>
          <Button
            asChild
            className="text-primary-500 border-primary-500 border bg-[#e9f4f4]"
          >
            <Link href="/consult-a-doctor">Book an appointment</Link>
          </Button>
        </div>
        <div>
          <ul className="space-y-4">
            {content.map(([title, description]) => (
              <li key={title} className="flex max-w-[491px] items-center gap-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="size-6 text-[#902F20] drop-shadow-lg"
                  aria-hidden="true"
                />
                <div className="rounded-lg bg-white p-2 shadow-lg">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-black-300">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { HowSwiftcareWorks };
