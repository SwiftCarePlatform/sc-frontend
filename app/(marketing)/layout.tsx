import React, { ReactNode } from 'react';

import Navbar from '@/components/shared/Navbar';

export default function MarketingLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
