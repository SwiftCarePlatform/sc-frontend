import React from 'react';

import Link from 'next/link';

import Logo from '@/assets/Logo';

import { Button } from '../ui/button';

const navItems = [
  // [name, path]
  ['Emergency', '/emergency'],
  ['Consult a doctor', '/consult-a-doctor'],
  ['Mental health', '/mental-health'],
  ['Support', '/support'],
];

const Navbar = () => {
  return (
    <header className="flex items-center p-4">
      {/* Logo */}
      <div>
        <Link href="/">
          <Logo showLabel={true} />
        </Link>
      </div>

      <div className="ml-auto flex items-center gap-8">
        {/* Primary navigation */}
        <nav>
          <ul className="flex items-center gap-4">
            {navItems.map(([name, path]) => (
              <li key={path}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA buttons */}
        <div className="space-x-4">
          <Button
            asChild
            className="text-primary-500 border-primary-500 border bg-white"
          >
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild className="bg-primary-500 text-white">
            <Link href="/sign-up">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
