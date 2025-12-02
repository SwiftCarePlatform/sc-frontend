import React from 'react';

import Link from 'next/link';

import SignUpForm from '@/features/auth/components/SignUpForm';

function SignUpPage() {
  return (
    <div>
      <SignUpForm />
      <div>
        <p className="text-black-300 p-2 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-black-800 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
