import React from 'react';

import Link from 'next/link';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#EDF8FF] p-4">
        <div className="w-full max-w-md rounded-lg bg-[#f0f0f0] p-1">
          {children}
        </div>
        <Link href="/" className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={faArrowLeft}
            aria-hidden="true"
            className="text-primary-500"
          />
          <span className="text-sm">Back to home page</span>
        </Link>
      </main>
    </div>
  );
}

export default AuthLayout;
