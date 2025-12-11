'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Logo from '@/assets/Logo';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UseMutateFunction } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

import { ApiResponse } from '@/types/api';

import { LoginInputs, LoginResponse } from '../types/auth.types';

const LoginForm = ({
  loginMutation,
  isPending,
}: {
  loginMutation: UseMutateFunction<
    ApiResponse<LoginResponse>,
    Error,
    LoginInputs,
    unknown
  >;
  isPending: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputs>();

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginMutation(data, {
      onSuccess(data) {
        toast.success(data.message, { style: { color: 'green' } });
        reset();
        router.push('/');
      },
      onError(error) {
        toast.error(error.message, { style: { color: 'red' } });
      },
    });
  };

  return (
    <div className="bg-white-50 space-y-6 rounded-md p-4">
      <div className="space-y-2">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <h1 className="text-center text-2xl font-medium">
          Sign in to continue
        </h1>
        <p className="text-white-300 text-center text-sm">
          Sign in to access your private therapy space.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldSet>
          <FieldLegend className="sr-only">User information</FieldLegend>
          <FieldDescription className="sr-only">
            Provide essential information to access your dashboard
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email*</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              <FieldError errors={[errors.email]} />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password*</FieldLabel>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className="pr-[42px]"
                />
                <Button
                  variant="ghost"
                  aria-label={`Password is ${showPassword ? 'Visible' : 'Hidden'}. Click to toggle password visibility`}
                  className="absolute right-0"
                  onClick={(e) => {
                    e.preventDefault();
                    // Toggle password visibility
                    setShowPassword((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </Button>
              </div>
              <FieldError errors={[errors.password]} />
            </Field>
          </FieldGroup>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input id="remember-me" type="checkbox" className="size-4" />
              <Label htmlFor="remember-me" className="text-black-400">
                Remember me
              </Label>
            </div>
            <Link href="/forgot-password" className="text-black-400">
              Forgot password?
            </Link>
          </div>
        </FieldSet>
        <Button
          disabled={isPending}
          className="bg-primary-500 mt-6 w-full disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Spinner /> Signing in
            </>
          ) : (
            'Sign in'
          )}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
