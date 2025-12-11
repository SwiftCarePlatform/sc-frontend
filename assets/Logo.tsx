import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = ({ showLabel = false }: { showLabel?: boolean }) => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <div
          className="bg-primary-500 flex size-7.5 items-center justify-center rounded-[5px]"
          aria-labelledby="company-name"
        >
          <FontAwesomeIcon
            icon={faUserDoctor}
            className="text-white-50 size-5"
            aria-hidden="true"
          />
        </div>
        <p
          id="company-name"
          className={cn(
            'text-primary-500 font-semibold uppercase',
            !showLabel && 'sr-only',
          )}
        >
          swiftcare
        </p>
      </Link>
    </div>
  );
};

export default Logo;
