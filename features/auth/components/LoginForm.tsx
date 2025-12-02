'use client';

import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Link from 'next/link';

import Logo from '@/assets/Logo';
import {
  faCalendar,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onError = (errors: any) => {
    console.log('Validation Errors:', errors);
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

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
        <Button className="bg-primary-500 mt-6 w-full">Sign in</Button>
      </form>
    </div>
  );
};

export default LoginForm;
