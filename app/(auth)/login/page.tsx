'use client';

import Link from 'next/link';

import LoginForm from '@/features/auth/components/LoginForm';
import useLoginMutation from '@/features/auth/queries/useLoginMutation';
import { cn } from '@/lib/utils';

function LoginPage() {
  const { mutate, isPending } = useLoginMutation();

  return (
    <div>
      <LoginForm loginMutation={mutate} isPending={isPending} />
      <div>
        <p className="text-black-300 p-2 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            href="/sign-up"
            className={cn(
              'text-black-800 font-medium',
              isPending && 'pointer-events-none',
            )}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
