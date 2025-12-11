'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import Logo from '@/assets/Logo';
import { UseMutateFunction } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

import { ApiResponse } from '@/types/api';

import {
  ForgotPasswordInputs,
  ForgotPasswordResponse,
} from '../types/auth.types';

const ForgotPasswordForm = ({
  forgotPasswordMutation,
  isPending,
}: {
  forgotPasswordMutation: UseMutateFunction<
    ApiResponse<ForgotPasswordResponse>,
    Error,
    ForgotPasswordInputs,
    unknown
  >;
  isPending: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPasswordInputs>();

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = (data) => {
    forgotPasswordMutation(data, {
      onSuccess(data) {
        toast.success(data.message, { style: { color: 'green' } });
        reset();
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
        <h1 className="text-center text-2xl font-medium">Forgot password?</h1>
        <p className="text-white-300 text-center text-sm">
          Enter your email to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <Button
          disabled={isPending}
          className="bg-primary-500 mt-6 w-full disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Spinner /> Please wait
            </>
          ) : (
            'Reset password'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
