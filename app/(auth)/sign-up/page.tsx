'use client';

import Link from 'next/link';

import SignUpForm from '@/features/auth/components/SignUpForm';
import useSignUpMutation from '@/features/auth/queries/useSignUpMutation';
import { cn } from '@/lib/utils';

function SignUpPage() {
  const { mutate, isPending } = useSignUpMutation();

  return (
    <div>
      <SignUpForm signUpMutation={mutate} isPending={isPending} />
      <div>
        <p className="text-black-300 p-2 text-center text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className={cn(
              'text-black-800 font-medium',
              isPending && 'pointer-events-none',
            )}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
