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
        <h1 className="text-center text-2xl font-medium">Forgot password?</h1>
        <p className="text-white-300 text-center text-sm">
          Enter your email to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <FieldSet>
          <FieldLegend className="sr-only">User information</FieldLegend>
          <FieldDescription className="sr-only">
            Provide email to reset your password
          </FieldDescription>
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
        </FieldSet>
        <Button className="bg-primary-500 mt-6 w-full">Reset password</Button>
      </form>
    </div>
  );
};

export default LoginForm;
