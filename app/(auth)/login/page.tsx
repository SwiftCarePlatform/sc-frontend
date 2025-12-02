import React from 'react';

import Link from 'next/link';

import LoginForm from '@/features/auth/components/LoginForm';

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <div>
        <p className="text-black-300 p-2 text-center text-sm">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-black-800 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
